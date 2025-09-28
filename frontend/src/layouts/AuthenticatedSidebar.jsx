import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { 
  User, 
  BarChart3, 
  MessageSquare, 
  Calendar, 
  Target, 
  Heart, 
  LogOut, 
  Menu,
  X,
  Settings,
  Bell,
  Award
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const { user, logout, isAuthenticated } = useAuth0();

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setShowMobileSidebar(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (isMobile) {
      setShowMobileSidebar(false);
    }
  };

  const handleLogout = () => {
    logout({ 
      logoutParams: { 
        returnTo: window.location.origin 
      } 
    });
  };

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3, description: 'Overview & Stats' },
    { id: 'profile', name: 'Profile', icon: User, description: 'Personal Information' },
    { id: 'discussion', name: 'Discussion', icon: MessageSquare, description: 'Community Chat' },
    { id: 'events', name: 'Events', icon: Calendar, description: 'Upcoming Events' },
    { id: 'mentorship', name: 'Mentorship', icon: Target, description: 'Connect & Guide' },
    { id: 'achievements', name: 'Achievements', icon: Award, description: 'Your Milestones' },
    { id: 'donation', name: 'Donation', icon: Heart, description: 'Support Alumni' },
    { id: 'notifications', name: 'Notifications', icon: Bell, description: 'Recent Updates' },
    { id: 'settings', name: 'Settings', icon: Settings, description: 'Preferences' }
  ];

  if (!isAuthenticated) {
    return null; // Don't show sidebar if not authenticated
  }

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileSidebar}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobile && showMobileSidebar && (
        <div 
          className="mobile-overlay" 
          onClick={() => setShowMobileSidebar(false)}
        />
      )}

      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobile && showMobileSidebar ? 'mobile-open' : ''} ${isMobile && !showMobileSidebar ? 'mobile-hidden' : ''}`}>
        
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="header-controls">
            {!isMobile && (
              <button 
                className="collapse-btn"
                onClick={toggleCollapsed}
                aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                <Menu size={20} />
              </button>
            )}
            
            {isMobile && (
              <button 
                className="close-btn"
                onClick={() => setShowMobileSidebar(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            )}
          </div>

          <div className="profile-section">
            <div className="profile-photo">
              <img 
                src={user?.picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=4f46e5&color=ffffff&size=160`}
                alt={user?.name || 'Profile'} 
                className="profile-image"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=4f46e5&color=ffffff&size=160`;
                }}
              />
              <div className="online-indicator"></div>
            </div>
            
            {!isCollapsed && (
              <div className="profile-info">
                <div className="profile-name">
                  {user?.name || 'Alumni User'}
                </div>
                <div className="profile-role">
                  {user?.role || user?.['custom:role'] || 'Alumni Member'}
                </div>
                <div className="profile-email">
                  {user?.email}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="sidebar-menu">
          <div className="menu-section">
            {!isCollapsed && <div className="menu-section-title">Navigation</div>}
            <ul className="menu-list">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id} className="menu-item">
                    <a
                      href={`/${item.id}`}
                      className={`menu-link ${activeItem === item.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick(item.id);
                      }}
                      title={isCollapsed ? item.name : ''}
                    >
                      <span className="menu-icon">
                        <IconComponent size={20} />
                      </span>
                      {!isCollapsed && (
                        <div className="menu-content">
                          <span className="menu-text">{item.name}</span>
                          <span className="menu-description">{item.description}</span>
                        </div>
                      )}
                      {activeItem === item.id && <div className="active-indicator"></div>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <div className="user-stats">
            {!isCollapsed && (
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Events</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">8</span>
                  <span className="stat-label">Connections</span>
                </div>
              </div>
            )}
          </div>
          
          <button 
            className="logout-button"
            onClick={handleLogout}
            title={isCollapsed ? 'Logout' : ''}
          >
            <span className="menu-icon">
              <LogOut size={20} />
            </span>
            {!isCollapsed && <span className="menu-text">Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;