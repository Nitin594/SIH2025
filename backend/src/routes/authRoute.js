import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const router = express.Router();

// utility function to generate JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// 👉 OAuth login/signup
router.post("/oauth", async (req, res) => {
  try {
    const { email, name, image } = req.body; // from OAuth

    if (!email) return res.status(400).json({ message: "Email is required" });

    let user = await User.findOne({ email });

    if (!user) {
      // Create new user with minimal info, role will be selected in complete profile
      user = new User({
        email,
        name,
        image,
        profileCompleted: false, // important
      });
      await user.save();
    }

    if (!user.profileCompleted) {
      return res.status(200).json({
        message: "Profile incomplete",
        redirect: "complete-profile",
        userId: user._id,
      });
    }

    // Profile is complete → generate token and redirect to dashboard
    const token = generateToken(user);
    res.status(200).json({
      message: "Login successful",
      token,
      user,
      redirect: "dashboard",
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// 👉 Complete profile route
router.post("/complete-profile", async (req, res) => {
  try {
    const { userId, role, data } = req.body; // data = role-specific fields

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = role;

    // Fill fields according to role
    if (role === "student") {
      user.rollNumber = data.rollNumber;
      user.semester = data.semester;
      user.enrollmentYear = data.enrollmentYear;
      user.coursesOfInterest = data.coursesOfInterest || [];
      user.careerAspiration = data.careerAspiration || "";
    } else if (role === "alumni") {
      user.graduationYear = data.graduationYear;
      user.company = data.company;
      user.designation = data.designation;
      user.industry = data.industry;
      user.experienceYears = data.experienceYears;
      user.linkedin = data.linkedin;
      user.portfolio = data.portfolio || "";
      user.willingToMentor = data.willingToMentor;
      user.openToJobReferrals = data.openToJobReferrals;
      user.interestedInEvents = data.interestedInEvents;
    } else if (role === "admin") {
      user.department = data.department;
      user.officialId = data.officialId;
    }

    // Mark profile as complete
    user.profileCompleted = true;

    await user.save();

    const token = generateToken(user);

    res.status(200).json({
      message: "Profile completed successfully",
      token,
      user,
      redirect: "dashboard",
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
