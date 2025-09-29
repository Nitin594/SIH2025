
// Alumni/Dashboard.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { 
  Users, 
  Calendar, 
  Award, 
  TrendingUp,
  Bell,
  MessageSquare,
  Heart
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth0();

  const stats = [
    { name: 'Connections', value: '24', change: '+12%', icon: Users, color: 'blue' },
    { name: 'Events Attended', value: '8', change: '+3', icon: Calendar, color: 'green' },
    { name: 'Achievements', value: '5', change: '+2', icon: Award, color: 'yellow' },
    { name: 'Donations Made', value: '$250', change: '+$50', icon: Heart, color: 'red' }
  ];

  const recentActivities = [
    { id: 1, type: 'event', message: 'Attended Tech Symposium 2024', time: '2 hours ago' },
    { id: 2, type: 'connection', message: 'Connected with John Doe', time: '1 day ago' },
    { id: 3, type: 'achievement', message: 'Earned "Mentor" badge', time: '3 days ago' },
    { id: 4, type: 'donation', message: 'Donated to Alumni Fund', time: '1 week ago' }
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">
            Welcome back, {user?.name?.split(' ')[0] || 'Alumni'}! 👋
          </h1>
          <p className="dashboard-subtitle">Here's what's happening in your alumni network</p>
        </div>
        <div className="dashboard-date">
          <p className="date-label">Today</p>
          <p className="date-value">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.name} className="stat-card">
            <div className="stat-content">
              <div>
                <p className="stat-name">{stat.name}</p>
                <p className="stat-value">{stat.value}</p>
                <p className={`stat-change ${stat.color}`}>
                  <TrendingUp className="stat-icon" />
                  {stat.change}
                </p>
              </div>
              <div className={`stat-icon-wrapper ${stat.color}`}>
                <stat.icon className="stat-main-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-sections">
        {/* Recent Activities */}
        <div className="activities-card">
          <div className="activities-header">
            <h2>Recent Activities</h2>
            <Bell className="bell-icon" />
          </div>
          <div className="activities-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  <MessageSquare className="activity-icon-svg" />
                </div>
                <div className="activity-info">
                  <p className="activity-message">{activity.message}</p>
                  <p className="activity-time">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="activities-button">View All Activities</button>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions-card">
          <h2 className="quick-actions-title">Quick Actions</h2>
          <div className="quick-actions-grid">
            <button className="quick-action">
              <Calendar className="quick-action-icon" />
              <span>Browse Events</span>
            </button>
            <button className="quick-action">
              <Users className="quick-action-icon" />
              <span>Find Alumni</span>
            </button>
            <button className="quick-action">
              <MessageSquare className="quick-action-icon" />
              <span>Join Discussion</span>
            </button>
            <button className="quick-action">
              <Heart className="quick-action-icon" />
              <span>Make Donation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
