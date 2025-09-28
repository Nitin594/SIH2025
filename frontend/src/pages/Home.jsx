import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.dataset.section]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[data-section]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: '15,000+', label: 'Active Alumni', icon: '👥', color: '#667eea' },
        { number: '85+', label: 'Countries', icon: '🌍', color: '#10b981' },
        { number: '1,200+', label: 'Success Stories', icon: '🏆', color: '#f59e0b' },
        { number: '98%', label: 'Satisfaction Rate', icon: '⭐', color: '#ef4444' }
    ];

    const features = [
        {
            id: 1,
            title: 'AI-Powered Networking',
            description: 'Smart algorithm matches you with relevant alumni based on your interests, career goals, and location.',
            icon: '🤖',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            delay: '0s'
        },
        {
            id: 2,
            title: 'Virtual Reality Events',
            description: 'Attend immersive alumni gatherings and networking events from anywhere in the world.',
            icon: '🥽',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            delay: '0.1s'
        },
        {
            id: 3,
            title: 'Blockchain Verification',
            description: 'Secure, tamper-proof verification of alumni credentials and achievements.',
            icon: '🔐',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            delay: '0.2s'
        },
        {
            id: 4,
            title: 'Career Acceleration Hub',
            description: 'AI-driven career recommendations, job matching, and skill development pathways.',
            icon: '🚀',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            delay: '0.3s'
        },
        {
            id: 5,
            title: 'Global Impact Tracking',
            description: 'See how your contributions and the alumni network create worldwide positive impact.',
            icon: '🌟',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            delay: '0.4s'
        },
        {
            id: 6,
            title: 'Metaverse Campus',
            description: 'Explore a digital twin of your alma mater and connect with fellow alumni in virtual spaces.',
            icon: '🏛️',
            gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            delay: '0.5s'
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Chen',
            role: 'Tech CEO, Class of 2015',
            content: 'This platform transformed my career. The AI networking helped me find my co-founder and secure $10M in funding!',
            image: '👩‍💼',
            company: 'InnovateAI'
        },
        {
            id: 2,
            name: 'Marcus Rodriguez',
            role: 'Global Marketing Director, Class of 2012',
            content: 'The virtual reality events are incredible. I feel more connected to my alma mater than ever before.',
            image: '👨‍💼',
            company: 'GlobalReach'
        },
        {
            id: 3,
            name: 'Dr. Emily Watson',
            role: 'Research Scientist, Class of 2018',
            content: 'The blockchain verification system helped me secure research grants worth $2.5M. Absolutely revolutionary!',
            image: '👩‍🔬',
            company: 'BioTech Innovations'
        }
    ];

    const achievements = [
        { title: 'Fortune 500 CEOs', count: '47', icon: '👔' },
        { title: 'Nobel Prize Winners', count: '3', icon: '🏅' },
        { title: 'Startup Unicorns', count: '12', icon: '🦄' },
        { title: 'Published Authors', count: '156', icon: '📚' }
    ];

    return (
        <div className="home-page">
            {/* Floating Elements */}
            <div className="floating-elements">
                <div className="floating-element" style={{
                    left: mousePosition.x * 0.01 + '%',
                    top: mousePosition.y * 0.01 + '%'
                }}></div>
                <div className="floating-element floating-element-2" style={{
                    right: mousePosition.x * 0.005 + '%',
                    top: mousePosition.y * 0.008 + '%'
                }}></div>
            </div>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-text">🚀 Next-Gen Alumni Platform</span>
                            <div className="badge-glow"></div>
                        </div>
                        <h1 className="hero-title">
                            Where <span className="gradient-text">Alumni Dreams</span>
                            <br />
                            Become <span className="gradient-text-2">Reality</span>
                        </h1>
                        <p className="hero-subtitle">
                            Join the most advanced alumni ecosystem on Earth. Connect, collaborate, 
                            and create impact through AI-powered networking, VR events, and blockchain verification.
                        </p>
                        <div className="hero-actions">
                            <button className="cta-primary">
                                <span>Join the Revolution</span>
                                <div className="button-glow"></div>
                            </button>
                            <button className="cta-secondary">
                                <span>Watch Demo</span>
                                <div className="play-icon">▶</div>
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <div className="stat-number">15K+</div>
                                <div className="stat-label">Alumni</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">85+</div>
                                <div className="stat-label">Countries</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">$2.8B</div>
                                <div className="stat-label">Impact Generated</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="floating-card card-1">
                            <div className="card-content">
                                <div className="card-icon">🤝</div>
                                <div className="card-text">AI Networking</div>
                            </div>
                        </div>
                        <div className="floating-card card-2">
                            <div className="card-content">
                                <div className="card-icon">🌐</div>
                                <div className="card-text">Global Connect</div>
                            </div>
                        </div>
                        <div className="floating-card card-3">
                            <div className="card-content">
                                <div className="card-icon">⚡</div>
                                <div className="card-text">Instant Match</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section" data-section="stats">
                <div className="container">
                    <div className={`stats-grid ${isVisible.stats ? 'animate' : ''}`}>
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card" style={{ '--delay': `${index * 0.1}s` }}>
                                <div className="stat-icon" style={{ background: stat.color }}>{stat.icon}</div>
                                <div className="stat-content">
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                                <div className="stat-glow" style={{ background: stat.color }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section" data-section="features">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Revolutionary Features</h2>
                        <p className="section-subtitle">
                            Experience the future of alumni networking with cutting-edge technology
                        </p>
                    </div>
                    <div className={`features-grid ${isVisible.features ? 'animate' : ''}`}>
                        {features.map((feature) => (
                            <div key={feature.id} className="feature-card" 
                                 style={{ '--delay': feature.delay, '--gradient': feature.gradient }}>
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <div className="feature-glow"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section" data-section="testimonials">
                <div className="container">
                    <div className="testimonial-container">
                        <h2 className="section-title">Success Stories</h2>
                        <div className="testimonial-slider">
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} 
                                     className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}>
                                    <div className="testimonial-content">
                                        <p>"{testimonial.content}"</p>
                                    </div>
                                    <div className="testimonial-author">
                                        <div className="author-image">{testimonial.image}</div>
                                        <div className="author-info">
                                            <h4>{testimonial.name}</h4>
                                            <p>{testimonial.role}</p>
                                            <span>{testimonial.company}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <button key={index} 
                                        className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                                        onClick={() => setCurrentTestimonial(index)}>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="achievements-section" data-section="achievements">
                <div className="container">
                    <div className="achievements-content">
                        <h2 className="section-title">Alumni Achievements</h2>
                        <div className={`achievements-grid ${isVisible.achievements ? 'animate' : ''}`}>
                            {achievements.map((achievement, index) => (
                                <div key={index} className="achievement-card" 
                                     style={{ '--delay': `${index * 0.1}s` }}>
                                    <div className="achievement-icon">{achievement.icon}</div>
                                    <div className="achievement-number">{achievement.count}</div>
                                    <div className="achievement-title">{achievement.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="final-cta-section">
                <div className="cta-background">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Alumni Experience?</h2>
                        <p>Join thousands of alumni who are already experiencing the future of networking</p>
                        <div className="cta-actions">
                            <button className="cta-primary large">
                                <span>Get Started Now</span>
                                <div className="button-glow"></div>
                            </button>
                            <div className="cta-benefits">
                                <div className="benefit">✓ Free Forever</div>
                                <div className="benefit">✓ No Credit Card Required</div>
                                <div className="benefit">✓ 5-Minute Setup</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;