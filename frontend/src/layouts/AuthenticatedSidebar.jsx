import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const { user, logout, isAuthenticated } = useAuth0();

  // Update active item based on current route
  useEffect(() => {
    const currentPath = location.pathname.substring(1) || 'dashboard';
    setActiveItem(currentPath);
  }, [location.pathname]);

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
    // Navigate to the selected page
    navigate(`/${itemName}`);
    
    // Close mobile sidebar if open
    if (isMobile) {
      setShowMobileSidebar(false);
    }

    // Update URL and browser history
    window.history.pushState(null, '', `/${itemName}`);
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
    
    // Save collapsed state to localStorage
    localStorage.setItem('sidebarCollapsed', JSON.stringify(!isCollapsed));
  };

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  // Load collapsed state from localStorage on mount
  useEffect(() => {
    const savedCollapsedState = localStorage.getItem('sidebarCollapsed');
    if (savedCollapsedState) {
      setIsCollapsed(JSON.parse(savedCollapsedState));
    }
  }, []);

  const menuItems = [
    { 
      id: 'dashboard', 
      name: 'Dashboard', 
      icon: BarChart3, 
      description: 'Overview & Stats',
      path: '/dashboard' 
    },
    { 
      id: 'complete-profile', 
      name: 'Complete Profile', 
      icon: User, 
      description: 'Finish your profile setup',
      path: '/complete-profile' 
    },
    { 
      id: 'profile', 
      name: 'Profile', 
      icon: User, 
      description: 'Personal Information',
      path: '/profile' 
    },
    { 
      id: 'discussion', 
      name: 'Discussion', 
      icon: MessageSquare, 
      description: 'Community Chat',
      path: '/discussion' 
    },
    { 
      id: 'events', 
      name: 'Events', 
      icon: Calendar, 
      description: 'Upcoming Events',
      path: '/events' 
    },
    { 
      id: 'mentorship', 
      name: 'Mentorship', 
      icon: Target, 
      description: 'Connect & Guide',
      path: '/mentorship' 
    },
    { 
      id: 'achievements', 
      name: 'Achievements', 
      icon: Award, 
      description: 'Your Milestones',
      path: '/achievements' 
    },
    { 
      id: 'donation', 
      name: 'Donation', 
      icon: Heart, 
      description: 'Support Alumni',
      path: '/donation' 
    },
    { 
      id: 'notifications', 
      name: 'Notifications', 
      icon: Bell, 
      description: 'Recent Updates',
      path: '/notifications',
      badge: 3 // Example notification count
    },
    { 
      id: 'settings', 
      name: 'Settings', 
      icon: Settings, 
      description: 'Preferences',
      path: '/settings' 
    }
  ];

  if (!isAuthenticated) {
    return null;
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

          <div 
            className="profile-section"
            onClick={() => handleItemClick('profile')}
            style={{ cursor: 'pointer' }}
            title="Go to Profile"
          >
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
                const isActive = activeItem === item.id || location.pathname === item.path;
                
                return (
                  <li key={item.id} className="menu-item">
                    <button
                      className={`menu-link ${isActive ? 'active' : ''}`}
                      onClick={() => handleItemClick(item.id)}
                      title={isCollapsed ? item.name : ''}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="menu-icon">
                        <IconComponent size={20} />
                        {/* Notification Badge */}
                        {item.badge && item.badge > 0 && (
                          <span className="notification-badge">
                            {item.badge > 99 ? '99+' : item.badge}
                          </span>
                        )}
                      </span>
                      {!isCollapsed && (
                        <div className="menu-content">
                          <span className="menu-text">{item.name}</span>
                          <span className="menu-description">{item.description}</span>
                        </div>
                      )}
                      {isActive && <div className="active-indicator"></div>}
                    </button>
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