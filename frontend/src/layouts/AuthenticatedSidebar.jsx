import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('profile');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const menuItems = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'discussion', name: 'Discussion', icon: '💬' },
    { id: 'events', name: 'Events', icon: '📅' },
    { id: 'mentorship', name: 'Mentorship', icon: '🎯' },
    { id: 'donation', name: 'Donation', icon: '💝' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="profile-section">
          <div className="profile-photo">
            <img 
              src="https://via.placeholder.com/80x80/4f46e5/ffffff?text=JD" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <div className="profile-name">
            John Doe
          </div>
        </div>
      </div>

      <div className="sidebar-menu">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <a
                href={`/${item.id}`}
                className={`menu-link ${activeItem === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.id);
                }}
              >
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <button className="logout-button">
          <span className="menu-icon">🚪</span>
          <span className="menu-text">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;