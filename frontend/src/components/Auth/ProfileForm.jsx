import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
  const [activeTab, setActiveTab] = useState('Student');
  const [formData, setFormData] = useState({
    // Common fields
    name: '',
    email: '',
    phone: '',
    dob: '',
    // Student fields
    rollNumber: '',
    semester: '',
    enrollmentYear: '',
    coursesOfInterest: '',
    careerAspiration: '',
    // Alumni fields
    graduationYear: '',
    company: '',
    designation: '',
    industry: '',
    experienceYears: '',
    linkedin: '',
    portfolio: '',
    willingToMentor: false,
    openToJobReferrals: false,
    interestedInEvents: false,
    // Admin fields
    officialId: '',
    department: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting ${activeTab} profile:`, formData);
    // Add form validation and submission logic here
    alert(`${activeTab} profile submitted successfully!`);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);
  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const departments = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Administration', 'Student Affairs'];

  const roleInstructions = {
    Student: 'Complete your student profile to connect with alumni and access mentorship opportunities.',
    Alumni: 'Share your professional journey to help current students and stay connected with the community.',
    Admin: 'Set up your administrative profile to manage the platform effectively.'
  };

  return (
    <div className="profile-form-container">
      <div className="profile-form-card">
        {/* Tabs */}
        <div className="tabs-container">
          {['Student', 'Alumni', 'Admin'].map((role) => (
            <button
              key={role}
              onClick={() => setActiveTab(role)}
              className={`tab-button ${activeTab === role ? 'tab-active' : ''}`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Form Container */}
        <div className="form-content">
          {/* Header */}
          <div className="form-header">
            <h2 className="form-title">
              Complete Your {activeTab} Profile
            </h2>
            <p className="form-subtitle">{roleInstructions[activeTab]}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Common Fields */}
            <div className="form-section">
              <h3 className="section-title">Basic Information</h3>
              <div className="form-grid">
                <div className="form-field">
                  <label className="field-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="field-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="field-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="field-input"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="field-input"
                  />
                </div>
              </div>
            </div>

            {/* Student Fields */}
            {activeTab === 'Student' && (
              <div className="form-section">
                <h3 className="section-title">Academic Details</h3>
                <div className="form-grid">
                  <div className="form-field">
                    <label className="field-label">
                      Roll Number <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="rollNumber"
                      value={formData.rollNumber}
                      onChange={handleInputChange}
                      required
                      className="field-input"
                      placeholder="e.g., 2023CSE001"
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      Current Semester <span className="required">*</span>
                    </label>
                    <select
                      name="semester"
                      value={formData.semester}
                      onChange={handleInputChange}
                      required
                      className="field-input"
                    >
                      <option value="">Select Semester</option>
                      {semesters.map(sem => (
                        <option key={sem} value={sem}>Semester {sem}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      Enrollment Year <span className="required">*</span>
                    </label>
                    <select
                      name="enrollmentYear"
                      value={formData.enrollmentYear}
                      onChange={handleInputChange}
                      required
                      className="field-input"
                    >
                      <option value="">Select Year</option>
                      {years.slice(0, 10).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="field-label">Courses of Interest</label>
                    <input
                      type="text"
                      name="coursesOfInterest"
                      value={formData.coursesOfInterest}
                      onChange={handleInputChange}
                      className="field-input"
                      placeholder="e.g., AI, Web Development"
                    />
                  </div>

                  <div className="form-field full-width">
                    <label className="field-label">Career Aspiration</label>
                    <textarea
                      name="careerAspiration"
                      value={formData.careerAspiration}
                      onChange={handleInputChange}
                      rows="3"
                      className="field-input"
                      placeholder="Describe your career goals and aspirations..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Alumni Fields */}
            {activeTab === 'Alumni' && (
              <div className="form-section">
                <h3 className="section-title">Professional Details</h3>
                <div className="form-grid">
                  <div className="form-field">
                    <label className="field-label">
                      Graduation Year <span className="required">*</span>
                    </label>
                    <select
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      required
                      className="field-input"
                    >
                      <option value="">Select Year</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      Current Company <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="field-input"
                      placeholder="e.g., Google, Microsoft"
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      Designation <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      required
                      className="field-input"
                      placeholder="e.g., Senior Software Engineer"
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      Industry <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="field-input"
                      placeholder="e.g., Technology, Finance"
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      Years of Experience <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      name="experienceYears"
                      value={formData.experienceYears}
                      onChange={handleInputChange}
                      required
                      min="0"
                      className="field-input"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      LinkedIn Profile <span className="required">*</span>
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      required
                      className="field-input"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div className="form-field full-width">
                    <label className="field-label">Portfolio URL</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="field-input"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>

                <div className="engagement-section">
                  <h4 className="engagement-title">Community Engagement</h4>
                  
                  <div className="checkbox-field">
                    <input
                      type="checkbox"
                      id="willingToMentor"
                      name="willingToMentor"
                      checked={formData.willingToMentor}
                      onChange={handleInputChange}
                      className="checkbox-input"
                    />
                    <label htmlFor="willingToMentor" className="checkbox-label">
                      I am willing to mentor students <span className="required">*</span>
                    </label>
                  </div>

                  <div className="checkbox-field">
                    <input
                      type="checkbox"
                      id="openToJobReferrals"
                      name="openToJobReferrals"
                      checked={formData.openToJobReferrals}
                      onChange={handleInputChange}
                      className="checkbox-input"
                    />
                    <label htmlFor="openToJobReferrals" className="checkbox-label">
                      I am open to providing job referrals <span className="required">*</span>
                    </label>
                  </div>

                  <div className="checkbox-field">
                    <input
                      type="checkbox"
                      id="interestedInEvents"
                      name="interestedInEvents"
                      checked={formData.interestedInEvents}
                      onChange={handleInputChange}
                      className="checkbox-input"
                    />
                    <label htmlFor="interestedInEvents" className="checkbox-label">
                      I am interested in participating in alumni events <span className="required">*</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Admin Fields */}
            {activeTab === 'Admin' && (
              <div className="form-section">
                <h3 className="section-title">Administrative Details</h3>
                <div className="form-grid">
                  <div className="form-field">
                    <label className="field-label">
                      Official ID <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="officialId"
                      value={formData.officialId}
                      onChange={handleInputChange}
                      required
                      className="field-input"
                      placeholder="e.g., ADMIN2025001"
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      Department <span className="required">*</span>
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className="field-input"
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="submit-container">
              <button type="submit" className="submit-button">
                Complete {activeTab} Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;