import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // 🔹 Common Fields
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: String,
    role: {
      type: String,
      enum: ["student", "alumni", "admin"],
      required: true,
    },
    phone: String,
    dob: String,

    // 🔹 Student Fields
    rollNumber: {
      type: String,
      required: function () {
        return this.role === "student";
      },
    },
    semester: {
      type: String,
      required: function () {
        return this.role === "student";
      },
    },
    enrollmentYear: {
      type: String,
      required: function () {
        return this.role === "student";
      },
    },
    coursesOfInterest: [String],
    careerAspiration: String,

    // 🔹 Alumni Fields
    graduationYear: {
      type: String,
      required: function () {
        return this.role === "alumni";
      },
    },
    company: {
      type: String,
      required: function () {
        return this.role === "alumni";
      },
    },
    designation: {
      type: String,
      required: function () {
        return this.role === "alumni";
      },
    },
    industry: {
      type: String,
      required: function () {
        return this.role === "alumni";
      },
    },
    experienceYears: {
      type: Number,
      required: function () {
        return this.role === "alumni";
      },
    },
    linkedin: {
      type: String,
      required: function () {
        return this.role === "alumni";
      },
    },
    portfolio: String,
    willingToMentor: {
      type: Boolean,
      required: function () {
        return this.role === "alumni";
      },
    },
    openToJobReferrals: {
      type: Boolean,
      required: function () {
        return this.role === "alumni";
      },
    },
    interestedInEvents: {
      type: Boolean,
      required: function () {
        return this.role === "alumni";
      },
    },

    // 🔹 Admin Fields
    officialId: {
      type: String,
      required: function () {
        return this.role === "admin";
      },
    },
    department: {
      type: String,
      required: function () {
        return this.role === "admin";
      },
    },

    // 🔹 Engagement & Settings
    notificationsEnabled: { type: Boolean, default: true },
    visibility: {
      type: String,
      enum: ["public", "alumniOnly", "adminOnly"],
      default: "alumniOnly",
    },

    profileCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
