import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
  const [activeTab, setActiveTab] = useState('Alumni');

  const renderAlumniForm = () => (
    <div className="form-section">
      <div className="form-grid">
        <div>
          <label className="form-label">Full Name *</label>
          <input type="text" className="form-input alumni-input" placeholder="Enter your full name" />
        </div>
        <div>
          <label className="form-label">Email Address *</label>
          <input type="email" className="form-input alumni-input" placeholder="Enter your email" />
        </div>
      </div>
      
      <div className="form-grid">
        <div>
          <label className="form-label">Graduation Year *</label>
          <select className="form-input alumni-input">
            <option value="">Select year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div>
          <label className="form-label">Department *</label>
          <input type="text" className="form-input alumni-input" placeholder="e.g., Computer Science" />
        </div>
      </div>

      <div>
        <label className="form-label">Current Company</label>
        <input type="text" className="form-input alumni-input" placeholder="Enter current company" />
      </div>

      <div>
        <label className="form-label">Job Title</label>
        <input type="text" className="form-input alumni-input" placeholder="Enter your job title" />
      </div>

      <div>
        <label className="form-label">LinkedIn Profile</label>
        <input type="url" className="form-input alumni-input" placeholder="https://linkedin.com/in/yourprofile" />
      </div>

      <div>
        <label className="form-label">Bio</label>
        <textarea className="form-input alumni-input textarea" placeholder="Tell us about yourself..." />
      </div>

      <button type="submit" className="btn btn-alumni">Complete Alumni Profile</button>
    </div>
  );

  const renderStudentForm = () => (
    <div className="form-section">
      <div className="form-grid">
        <div>
          <label className="form-label">Full Name *</label>
          <input type="text" className="form-input student-input" placeholder="Enter your full name" />
        </div>
        <div>
          <label className="form-label">Email Address *</label>
          <input type="email" className="form-input student-input" placeholder="Enter your email" />
        </div>
      </div>
      
      <div className="form-grid">
        <div>
          <label className="form-label">Student ID *</label>
          <input type="text" className="form-input student-input" placeholder="Enter student ID" />
        </div>
        <div>
          <label className="form-label">Year of Study *</label>
          <select className="form-input student-input">
            <option value="">Select year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
            <option value="5">5th Year</option>
          </select>
        </div>
      </div>

      <div className="form-grid">
        <div>
          <label className="form-label">Department *</label>
          <input type="text" className="form-input student-input" placeholder="e.g., Computer Science" />
        </div>
        <div>
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-input student-input" placeholder="Enter phone number" />
        </div>
      </div>

      <div>
        <label className="form-label">Areas of Interest</label>
        <input type="text" className="form-input student-input" placeholder="e.g., Web Development, AI, Data Science" />
      </div>

      <div>
        <label className="form-label">Expected Graduation Year *</label>
        <select className="form-input student-input">
          <option value="">Select year</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
        </select>
      </div>

      <button type="submit" className="btn btn-student">Complete Student Profile</button>
    </div>
  );

  const renderAdminForm = () => (
    <div className="form-section">
      <div className="form-grid">
        <div>
          <label className="form-label">Full Name *</label>
          <input type="text" className="form-input admin-input" placeholder="Enter your full name" />
        </div>
        <div>
          <label className="form-label">Official Email *</label>
          <input type="email" className="form-input admin-input" placeholder="Enter official email" />
        </div>
      </div>
      
      <div className="form-grid">
        <div>
          <label className="form-label">Employee ID *</label>
          <input type="text" className="form-input admin-input" placeholder="Enter employee ID" />
        </div>
        <div>
          <label className="form-label">Department *</label>
          <select className="form-input admin-input">
            <option value="">Select department</option>
            <option value="administration">Administration</option>
            <option value="academics">Academics</option>
            <option value="it">IT Department</option>
            <option value="hr">Human Resources</option>
            <option value="finance">Finance</option>
          </select>
        </div>
      </div>

      <div className="form-grid">
        <div>
          <label className="form-label">Position/Role *</label>
          <input type="text" className="form-input admin-input" placeholder="e.g., System Administrator" />
        </div>
        <div>
          <label className="form-label">Access Level *</label>
          <select className="form-input admin-input">
            <option value="">Select access level</option>
            <option value="basic">Basic</option>
            <option value="moderate">Moderate</option>
            <option value="full">Full Access</option>
            <option value="super">Super Admin</option>
          </select>
        </div>
      </div>

      <div>
        <label className="form-label">Phone Number *</label>
        <input type="tel" className="form-input admin-input" placeholder="Enter phone number" />
      </div>

      <div>
        <label className="form-label">Office Location</label>
        <input type="text" className="form-input admin-input" placeholder="e.g., Building A, Room 201" />
      </div>

      <div>
        <label className="form-label">Additional Notes</label>
        <textarea className="form-input admin-input textarea" placeholder="Any additional information..." />
      </div>

      <button type="submit" className="btn btn-admin">Complete Admin Profile</button>
    </div>
  );

  const renderForm = () => {
    switch (activeTab) {
      case 'Alumni':
        return renderAlumniForm();
      case 'Student':
        return renderStudentForm();
      case 'Admin':
        return renderAdminForm();
      default:
        return renderAlumniForm();
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1 className="page-title">Complete Your Profile</h1>
          <p className="page-subtitle">Please fill out the form based on your role</p>
        </div>

        <div className="tabs-container">
          <div className="tabs-box">
            {['Alumni', 'Student', 'Admin'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-btn ${activeTab === tab ? 'tab-active' : 'tab-inactive'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-header">
            <h2 className="form-title">{activeTab} Registration</h2>
            <p className="form-subtitle">
              {activeTab === 'Alumni' && 'Register as an alumni member to connect with your alma mater.'}
              {activeTab === 'Student' && 'Register as a current student to access academic resources.'}
              {activeTab === 'Admin' && 'Register as an administrator to manage the system.'}
            </p>
          </div>
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
