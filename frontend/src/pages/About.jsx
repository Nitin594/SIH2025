import React from 'react';
import './About.css';

const About = () => {
    const stats = [
        { number: '10,000+', label: 'Alumni Worldwide', icon: '👥' },
        { number: '50+', label: 'Countries', icon: '🌍' },
        { number: '25+', label: 'Years of Excellence', icon: '🏆' },
        { number: '500+', label: 'Events Organized', icon: '🎯' }
    ];

    const features = [
        {
            id: 1,
            title: 'Centralized Alumni Database',
            description: 'Secure and comprehensive database of all alumni information with advanced search and filtering capabilities.',
            icon: '🗄️'
        },
        {
            id: 2,
            title: 'Networking & Mentorship',
            description: 'Connect with fellow alumni and provide guidance to current students through our mentorship programs.',
            icon: '🤝'
        },
        {
            id: 3,
            title: 'Event Management',
            description: 'Stay updated with alumni events, reunions, webinars, and professional development sessions.',
            icon: '📅'
        },
        {
            id: 4,
            title: 'Career Opportunities',
            description: 'Access job postings, internship opportunities, and career guidance from industry professionals.',
            icon: '💼'
        },
        {
            id: 5,
            title: 'Donation & Fundraising',
            description: 'Support your alma mater through secure donation systems and fundraising campaigns.',
            icon: '💝'
        },
        {
            id: 6,
            title: 'Success Stories',
            description: 'Share and discover inspiring success stories from alumni across various industries.',
            icon: '⭐'
        }
    ];

    const team = [
        {
            id: 1,
            name: 'Dr. Sarah Johnson',
            role: 'Alumni Relations Director',
            image: '👩‍💼',
            description: 'Leading alumni engagement initiatives for over 10 years.'
        },
        {
            id: 2,
            name: 'Mark Thompson',
            role: 'Platform Manager',
            image: '👨‍💻',
            description: 'Ensuring seamless user experience and platform functionality.'
        },
        {
            id: 3,
            name: 'Lisa Chen',
            role: 'Community Coordinator',
            image: '👩‍🎓',
            description: 'Fostering connections and organizing meaningful events.'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1>About Our Alumni Platform</h1>
                    <p>
                        Connecting generations of graduates through innovation, networking, and 
                        continuous learning. Our platform serves as the bridge between past, 
                        present, and future success stories.
                    </p>
                    <div className="hero-actions">
                        <button className="cta-button primary">Join Our Community</button>
                        <button className="cta-button secondary">Learn More</button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                To create a thriving community that empowers alumni to stay connected, 
                                mentor current students, and contribute to the continuous growth of 
                                our institution. We believe in the power of lifelong relationships 
                                and collaborative success.
                            </p>
                            <div className="mission-points">
                                <div className="mission-point">
                                    <span className="point-icon">✓</span>
                                    <span>Foster meaningful connections between alumni worldwide</span>
                                </div>
                                <div className="mission-point">
                                    <span className="point-icon">✓</span>
                                    <span>Provide career development and mentorship opportunities</span>
                                </div>
                                <div className="mission-point">
                                    <span className="point-icon">✓</span>
                                    <span>Support institutional growth through alumni engagement</span>
                                </div>
                            </div>
                        </div>
                        <div className="mission-image">
                            <div className="image-placeholder">
                                <span>🎓</span>
                                <p>Alumni Success Journey</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Platform Features</h2>
                        <p>Comprehensive tools designed to enhance your alumni experience</p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature) => (
                            <div key={feature.id} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Meet Our Team</h2>
                        <p>Dedicated professionals working to serve our alumni community</p>
                    </div>
                    <div className="team-grid">
                        {team.map((member) => (
                            <div key={member.id} className="team-card">
                                <div className="team-image">{member.image}</div>
                                <h3>{member.name}</h3>
                                <h4>{member.role}</h4>
                                <p>{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="vision-section">
                <div className="container">
                    <div className="vision-content">
                        <h2>Our Vision</h2>
                        <p>
                            To be the leading alumni platform that transforms how educational 
                            institutions engage with their graduates, creating a global network 
                            of success, innovation, and positive impact.
                        </p>
                        <div className="vision-goals">
                            <div className="goal">
                                <h4>Innovation</h4>
                                <p>Leveraging cutting-edge technology to enhance user experience</p>
                            </div>
                            <div className="goal">
                                <h4>Community</h4>
                                <p>Building strong, lasting relationships across generations</p>
                            </div>
                            <div className="goal">
                                <h4>Growth</h4>
                                <p>Enabling continuous personal and professional development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Join Our Alumni Community?</h2>
                        <p>
                            Connect with thousands of alumni worldwide and unlock new opportunities 
                            for networking, mentorship, and career growth.
                        </p>
                        <div className="cta-buttons">
                            <button className="cta-button primary large">Get Started Today</button>
                            <button className="cta-button secondary large">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;