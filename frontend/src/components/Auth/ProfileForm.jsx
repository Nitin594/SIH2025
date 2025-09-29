import React, { useState } from 'react';

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
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
=======
    <div className="profile-form-container">
      <div className="profile-form-card">
        {/* Tabs */}
        <div className="tabs-container">
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
          {['Student', 'Alumni', 'Admin'].map((role) => (
            <button
              key={role}
              onClick={() => setActiveTab(role)}
<<<<<<< HEAD
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                activeTab === role
                  ? 'bg-blue-600 text-white border-b-4 border-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
=======
              className={`tab-button ${activeTab === role ? 'tab-active' : ''}`}
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
            >
              {role}
            </button>
          ))}
        </div>

        {/* Form Container */}
<<<<<<< HEAD
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Complete Your {activeTab} Profile
            </h2>
            <p className="text-gray-600">{roleInstructions[activeTab]}</p>
=======
        <div className="form-content">
          {/* Header */}
          <div className="form-header">
            <h2 className="form-title">
              Complete Your {activeTab} Profile
            </h2>
            <p className="form-subtitle">{roleInstructions[activeTab]}</p>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Common Fields */}
<<<<<<< HEAD
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-gray-200">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
=======
            <div className="form-section">
              <h3 className="section-title">Basic Information</h3>
              <div className="form-grid">
                <div className="form-field">
                  <label className="field-label">
                    Full Name <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
<<<<<<< HEAD
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                    className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    placeholder="Enter your full name"
                  />
                </div>

<<<<<<< HEAD
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
=======
                <div className="form-field">
                  <label className="field-label">
                    Email Address <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
<<<<<<< HEAD
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                    className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    placeholder="your.email@example.com"
                  />
                </div>

<<<<<<< HEAD
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
=======
                <div className="form-field">
                  <label className="field-label">Phone Number</label>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
<<<<<<< HEAD
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                    className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

<<<<<<< HEAD
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
=======
                <div className="form-field">
                  <label className="field-label">Date of Birth</label>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
<<<<<<< HEAD
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                    className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                  />
                </div>
              </div>
            </div>

            {/* Student Fields */}
            {activeTab === 'Student' && (
<<<<<<< HEAD
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-gray-200">
                  Academic Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Roll Number <span className="text-red-500">*</span>
=======
              <div className="form-section">
                <h3 className="section-title">Academic Details</h3>
                <div className="form-grid">
                  <div className="form-field">
                    <label className="field-label">
                      Roll Number <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                    <input
                      type="text"
                      name="rollNumber"
                      value={formData.rollNumber}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                      placeholder="e.g., 2023CSE001"
                    />
                  </div>

<<<<<<< HEAD
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Semester <span className="text-red-500">*</span>
=======
                  <div className="form-field">
                    <label className="field-label">
                      Current Semester <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                    <select
                      name="semester"
                      value={formData.semester}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    >
                      <option value="">Select Semester</option>
                      {semesters.map(sem => (
                        <option key={sem} value={sem}>Semester {sem}</option>
                      ))}
                    </select>
                  </div>

<<<<<<< HEAD
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enrollment Year <span className="text-red-500">*</span>
=======
                  <div className="form-field">
                    <label className="field-label">
                      Enrollment Year <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                    <select
                      name="enrollmentYear"
                      value={formData.enrollmentYear}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    >
                      <option value="">Select Year</option>
                      {years.slice(0, 10).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

<<<<<<< HEAD
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Courses of Interest
                    </label>
=======
                  <div className="form-field">
                    <label className="field-label">Courses of Interest</label>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    <input
                      type="text"
                      name="coursesOfInterest"
                      value={formData.coursesOfInterest}
                      onChange={handleInputChange}
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                      placeholder="e.g., AI, Web Development"
                    />
                  </div>

<<<<<<< HEAD
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Career Aspiration
                    </label>
=======
                  <div className="form-field full-width">
                    <label className="field-label">Career Aspiration</label>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    <textarea
                      name="careerAspiration"
                      value={formData.careerAspiration}
                      onChange={handleInputChange}
                      rows="3"
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                      placeholder="Describe your career goals and aspirations..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Alumni Fields */}
            {activeTab === 'Alumni' && (
<<<<<<< HEAD
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-gray-200">
                  Professional Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Graduation Year <span className="text-red-500">*</span>
=======
              <div className="form-section">
                <h3 className="section-title">Professional Details</h3>
                <div className="form-grid">
                  <div className="form-field">
                    <label className="field-label">
                      Graduation Year <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                    <select
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    >
                      <option value="">Select Year</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

<<<<<<< HEAD
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Company <span className="text-red-500">*</span>
=======
                  <div className="form-field">
                    <label className="field-label">
                      Current Company <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                      placeholder="e.g., Google, Microsoft"
                    />
                  </div>

<<<<<<< HEAD
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Designation <span className="text-red-500">*</span>
=======
                  <div className="form-field">
                    <label className="field-label">
                      Designation <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                      placeholder="e.g., Senior Software Engineer"
                    />
                  </div>

<<<<<<< HEAD
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry <span className="text-red-500">*</span>
=======
                  <div className="form-field">
                    <label className="field-label">
                      Industry <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                      placeholder="e.g., Technology, Finance"
                    />
                  </div>

<<<<<<< HEAD
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience <span className="text-red-500">*</span>
=======
                  <div className="form-field">
                    <label className="field-label">
                      Years of Experience <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                    <input
                      type="number"
                      name="experienceYears"
                      value={formData.experienceYears}
                      onChange={handleInputChange}
                      required
                      min="0"
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                      placeholder="0"
                    />
                  </div>

<<<<<<< HEAD
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn Profile <span className="text-red-500">*</span>
=======
                  <div className="form-field">
                    <label className="field-label">
                      LinkedIn Profile <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

<<<<<<< HEAD
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio URL
                    </label>
=======
                  <div className="form-field full-width">
                    <label className="field-label">Portfolio URL</label>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>

<<<<<<< HEAD
                <div className="mt-6 space-y-4">
                  <h4 className="text-lg font-semibold text-gray-700">Community Engagement</h4>
                  
                  <div className="flex items-center">
=======
                <div className="engagement-section">
                  <h4 className="engagement-title">Community Engagement</h4>
                  
                  <div className="checkbox-field">
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    <input
                      type="checkbox"
                      id="willingToMentor"
                      name="willingToMentor"
                      checked={formData.willingToMentor}
                      onChange={handleInputChange}
<<<<<<< HEAD
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="willingToMentor" className="ml-3 text-sm font-medium text-gray-700">
                      I am willing to mentor students <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="flex items-center">
=======
                      className="checkbox-input"
                    />
                    <label htmlFor="willingToMentor" className="checkbox-label">
                      I am willing to mentor students <span className="required">*</span>
                    </label>
                  </div>

                  <div className="checkbox-field">
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    <input
                      type="checkbox"
                      id="openToJobReferrals"
                      name="openToJobReferrals"
                      checked={formData.openToJobReferrals}
                      onChange={handleInputChange}
<<<<<<< HEAD
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="openToJobReferrals" className="ml-3 text-sm font-medium text-gray-700">
                      I am open to providing job referrals <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="flex items-center">
=======
                      className="checkbox-input"
                    />
                    <label htmlFor="openToJobReferrals" className="checkbox-label">
                      I am open to providing job referrals <span className="required">*</span>
                    </label>
                  </div>

                  <div className="checkbox-field">
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    <input
                      type="checkbox"
                      id="interestedInEvents"
                      name="interestedInEvents"
                      checked={formData.interestedInEvents}
                      onChange={handleInputChange}
<<<<<<< HEAD
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="interestedInEvents" className="ml-3 text-sm font-medium text-gray-700">
                      I am interested in participating in alumni events <span className="text-red-500">*</span>
=======
                      className="checkbox-input"
                    />
                    <label htmlFor="interestedInEvents" className="checkbox-label">
                      I am interested in participating in alumni events <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Admin Fields */}
            {activeTab === 'Admin' && (
<<<<<<< HEAD
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-gray-200">
                  Administrative Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Official ID <span className="text-red-500">*</span>
=======
              <div className="form-section">
                <h3 className="section-title">Administrative Details</h3>
                <div className="form-grid">
                  <div className="form-field">
                    <label className="field-label">
                      Official ID <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                    <input
                      type="text"
                      name="officialId"
                      value={formData.officialId}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                      placeholder="e.g., ADMIN2025001"
                    />
                  </div>

<<<<<<< HEAD
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department <span className="text-red-500">*</span>
=======
                  <div className="form-field">
                    <label className="field-label">
                      Department <span className="required">*</span>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                      className="field-input"
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
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
<<<<<<< HEAD
            <div className="flex justify-end pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
=======
            <div className="submit-container">
              <button type="submit" className="submit-button">
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
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