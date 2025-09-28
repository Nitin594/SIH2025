import React, { useState } from 'react';
import './Events.css';

const Events = () => {
    const [activeFilter, setActiveFilter] = useState('All Events');

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const upcomingEvents = [
        {
            id: 1,
            title: 'Webinar on Career Development',
            description: 'Join thought leaders from industry to discuss career growth opportunities.',
            date: 'March 15, 2024',
            time: '10:00 AM - 12:00 PM',
            icon: '🏢'
        },
        {
            id: 2,
            title: 'Digital Marketing Strategies',
            description: 'Learn the latest trends in digital marketing from industry experts.',
            date: 'March 22, 2024',
            time: '1:00 PM - 3:00 PM',
            icon: '💻'
        }
    ];

    const upcomingWebinars = [
        {
            id: 1,
            title: 'Data Science Bootcamp',
            description: 'Boost your learning by learning from industry professionals.',
            date: 'March 29, 2024',
            time: '9:00 AM - 4:00 PM',
            icon: '📊'
        },
        {
            id: 2,
            title: 'Global Networking Opportunities',
            description: 'Connect with alumni around the world for networking opportunities.',
            date: 'April 5, 2024',
            time: '11:00 AM - 1:00 PM',
            icon: '🌐'
        }
    ];

    const benefits = [
        {
            id: 1,
            title: 'Networking',
            description: 'Meet like-minded alumni and expand your professional network.',
            details: 'Building - Professional Network',
            icon: '👥'
        },
        {
            id: 2,
            title: 'Learning',
            description: 'Participate in interactive sessions led by experts.',
            details: 'Learning - Skill Enhancement',
            icon: '📚'
        },
        {
            id: 3,
            title: 'Career Opportunities',
            description: 'Discover new job openings and internship opportunities.',
            details: 'Career - Job Opportunities',
            icon: '💼'
        }
    ];

    return (
        <div className="alumni-events">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1>Stay Connected with Us!</h1>
                    <p>Join our upcoming seminars and webinars to enhance your knowledge and networking.</p>
                    
                    <div className="hero-buttons">
                        <button className="register-btn">Register Now</button>
                        <button className="view-all-btn">View All Events</button>
                    </div>

                    <div className="filter-tabs">
                        <button 
                            className={`filter-tab ${activeFilter === 'All Events' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('All Events')}
                        >
                            All Events
                        </button>
                        <button 
                            className={`filter-tab ${activeFilter === 'Past Events' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('Past Events')}
                        >
                            Past Events
                        </button>
                        <button 
                            className={`filter-tab ${activeFilter === 'Feedback' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('Feedback')}
                        >
                            Feedback
                        </button>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="events-section">
                <div className="container">
                    <div className="events-grid">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="event-card">
                                <div className="event-icon">{event.icon}</div>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <div className="event-datetime">
                                    <div className="event-date">{event.date}</div>
                                    <div className="event-time">{event.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Webinars Section */}
            <section className="webinars-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Upcoming Webinars</h2>
                        <p>Check out the latest seminars and webinars planned for our alumni.</p>
                    </div>

                    <div className="webinars-grid">
                        {upcomingWebinars.map((webinar) => (
                            <div key={webinar.id} className="webinar-card">
                                <div className="webinar-icon">{webinar.icon}</div>
                                <div className="webinar-content">
                                    <h3>{webinar.title}</h3>
                                    <p>{webinar.description}</p>
                                    <div className="webinar-datetime">
                                        <div className="webinar-date">{webinar.date}</div>
                                        <div className="webinar-time">{webinar.time}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Attend Section */}
            <section className="benefits-section">
                <div className="container">
                    <div className="benefits-content">
                        <div className="benefits-header">
                            <h2>Why Attend?</h2>
                            <p>Explore the benefits of participating in our events.</p>
                        </div>

                        <div className="benefits-list">
                            {benefits.map((benefit) => (
                                <div key={benefit.id} className="benefit-item">
                                    <div className="benefit-icon">{benefit.icon}</div>
                                    <div className="benefit-content">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                        <span className="benefit-details">{benefit.details}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;