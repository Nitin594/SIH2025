import React, { useState, useEffect } from 'react';
import './Achievements.css';

const Achievements = () => {
    const [activeFilter, setActiveFilter] = useState('This Year');

    useEffect(() => {
        // Add loading animation for cards
        const cards = document.querySelectorAll('.alumni-card, .post-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const handleExploreClick = () => {
        document.querySelector('.recent-posts-section').scrollIntoView({
            behavior: 'smooth'
        });
    };

    const filters = ['Recent News', 'This Year', 'Recent', 'Popular'];

    const alumniData = [
        {
            id: 1,
            name: 'John Doe',
            year: '2015 Graduate • Tech',
            description: 'John has developed his passion for technology into a successful startup that has reached world in the industry.',
            postedBy: 'Alumni Association'
        },
        {
            id: 2,
            name: 'Jane Smith',
            year: '2018 Graduate • Business',
            description: 'Jane has balanced her life by going back to the community and has created several impactful programs.',
            postedBy: 'Alumni Association'
        }
    ];

    const recentPosts = [
        {
            id: 1,
            title: "Excited to share my journey at the National Tech Conference! Amazing...",
            category: 'Post • Business',
            author: 'Mary Johnson',
            likes: 5,
            imageText: "Here's a tech conference"
        },
        {
            id: 2,
            title: "Honored to receive the Outstanding Alumni Award this year! Grateful...",
            category: 'Awards • Succeeded',
            author: 'Robert Brown',
            likes: 12,
            imageText: "Recent workshop details"
        }
    ];

    return (
        <div className="alumni-success-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Celebrating Our Achievements</h1>
                        <p>Discover the inspiring stories and achievements of our alumni.</p>
                        <div className="filter-buttons">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                    onClick={() => handleFilterClick(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="hero-image">
                        <span style={{ fontSize: '1.2rem', opacity: '0.7' }}>
                            Achievement Showcase
                        </span>
                    </div>
                </div>
            </section>

            {/* Alumni Highlights Section */}
            <section className="highlights-section">
                <div className="container">
                    <h2>Alumni Highlights</h2>
                    <p>Success stories from our incredible alumni network.</p>
                    <button className="explore-btn" onClick={handleExploreClick}>
                        Explore More Stories
                    </button>
                    
                    <div className="alumni-cards">
                        {alumniData.map((alumni) => (
                            <div key={alumni.id} className="alumni-card">
                                <div className="alumni-avatar"></div>
                                <h3>{alumni.name}</h3>
                                <div className="year">{alumni.year}</div>
                                <p>{alumni.description}</p>
                                <div className="card-footer">
                                    <span>Posted by {alumni.postedBy}</span>
                                    <div className="social-links">
                                        <a href="#" title="LinkedIn">in</a>
                                        <a href="#" title="Twitter">tw</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2>Alumni Testimonials</h2>
                    <p>Hear directly from those who walked the same path and achieved greatness.</p>
                    <div className="testimonial-actions">
                        <button className="testimonial-btn">View More</button>
                        <button className="testimonial-btn">Submit Testimonial</button>
                    </div>
                </div>
            </section>

            {/* Recent Alumni Posts Section */}
            <section className="recent-posts-section">
                <div className="container">
                    <h2>Recent Alumni Posts</h2>
                    <p className="subtitle">Stay updated with the latest activities and achievements from our Alumni</p>
                    
                    <div className="posts-grid">
                        {recentPosts.map((post) => (
                            <div key={post.id} className="post-card">
                                <div className="post-image">
                                    <span>{post.imageText}</span>
                                </div>
                                <div className="post-content">
                                    <h3>{post.title}</h3>
                                    <div className="post-meta">
                                        <div>
                                            <div>{post.category}</div>
                                            <div>{post.author}</div>
                                        </div>
                                        <div className="post-stats">
                                            <span>👍 {post.likes}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default Achievements;