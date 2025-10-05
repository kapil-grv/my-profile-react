import React from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const contacts = [
        {
            icon: "icon-globe-outline",
            label: "Email",
            content: <a href="mailto:kapilrv@gmail.com">kapilrv@gmail.com</a>
        },
        {
            icon: "icon-phone",
            label: "Phone",
            content: <a href="tel:+919008314988">(+91) 900-831-4988</a>
        }
    ];

    return (
        <section id="contact" className="colorlib-contact" data-section="contact">
            <div className="colorlib-narrow-content">
                <div className="section-header">
                    <span className="heading-meta">Get in Touch</span>
                    <h2 className="colorlib-heading">Contact Me</h2>
                    <p>Feel free to reach out for collaborations or opportunities</p>
                </div>

                <div
                    ref={ref}
                    className={`contact-grid ${inView ? 'animate-box animated fadeIn' : ''}`}
                >
                    {contacts.map((contact, index) => (
                        <div key={index} className="contact-item">
                            <div className="contact-icon">
                                <i className={contact.icon}></i>
                            </div>
                            <div className="contact-text">
                                <h4 style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    marginBottom: '0.5rem',
                                    color: 'var(--gray-700)'
                                }}>
                                    {contact.label}
                                </h4>
                                {contact.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;