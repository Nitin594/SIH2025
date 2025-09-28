import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    const handleBackToHome = () => {
        // Handle navigation to home
        console.log('Navigate to home');
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1>Get in Touch!</h1>
                    <p>
                        We're here to help you. Reach out to us through the form below, or feel 
                        free to contact us via email or phone.
                    </p>
                    <div className="hero-buttons">
                        <button className="back-home-btn" onClick={handleBackToHome}>
                            Back to Home
                        </button>
                        <button className="submit-btn" onClick={() => document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' })}>
                            Submit
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Contact Form</h2>
                            <p>Fill out the form below and our support team will get back to you soon.</p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Your email address"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your message"
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="send-message-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Contact Details Section */}
            <section className="contact-details-section">
                <div className="container">
                    <div className="contact-details">
                        <div className="details-header">
                            <h2>Contact Details</h2>
                            <p>You can also reach us through:</p>
                        </div>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="contact-icon email-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    <h3>Support Email</h3>
                                    <a href="mailto:support@alumniwebsite.com">support@alumniwebsite.com</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="contact-icon phone-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V19.92C22 20.51 21.39 21 20.83 21C9.28 21 0 11.72 0 0.17C0 -0.39 0.49 -1 1.08 -1H4.08C4.67 -1 5.16 -0.51 5.16 0.08C5.16 1.58 5.35 3.05 5.72 4.47C5.81 4.76 5.72 5.08 5.49 5.31L3.62 7.18C5.2 10.62 8.38 13.8 11.82 15.38L13.69 13.51C13.92 13.28 14.24 13.19 14.53 13.28C15.95 13.65 17.42 13.84 18.92 13.84C19.51 13.84 20 14.33 20 14.92V17.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    <h3>Phone Number</h3>
                                    <a href="tel:+123-456-7890">+123-456-7890</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default Contact;