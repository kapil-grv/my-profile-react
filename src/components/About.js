import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const highlights = [
        {
            number: "7+",
            label: "Years Experience",
            description: "Professional GIS & Software Development"
        },
        {
            number: "20+",
            label: "Technologies",
            description: "Mastered across GIS, Data & Development"
        },
        {
            number: "15+",
            label: "Projects",
            description: "Successfully delivered across industries"
        }
    ];

    return (
        <section id="about" className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="section-header">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                </div>

                <div className="about-desc">
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                        I'm a <strong>Senior Software Engineer</strong> with <strong>7+ years of experience</strong> specializing in
                        <strong> geospatial technologies, data analytics, and full-stack development</strong>. Currently at <strong>Dfy Graviti</strong>,
                        I build cutting-edge platforms for real-time big data analytics, Earth observation, and location intelligence.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        With a <strong>M.Sc in GIS</strong>, I've led projects at <strong>Alphabyte Ventures, Reliance Jio, and Near Intelligence</strong>,
                        creating scalable solutions at the intersection of technology, data, and geography.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="highlights-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: 'var(--spacing-md)',
                    margin: '2.5rem 0'
                }}>
                    {highlights.map((item, index) => (
                        <div key={index} style={{
                            textAlign: 'center',
                            padding: '1.5rem 1rem',
                            background: 'white',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            border: '2px solid var(--gray-200)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--primary-500)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--gray-200)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                            }}>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: '800',
                                color: 'var(--primary-600)',
                                marginBottom: '0.5rem'
                            }}>{item.number}</div>
                            <div style={{
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                color: 'var(--gray-900)',
                                marginBottom: '0.25rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>{item.label}</div>
                            <div style={{
                                fontSize: '0.8rem',
                                color: 'var(--gray-600)',
                                lineHeight: '1.4'
                            }}>{item.description}</div>
                        </div>
                    ))}
                </div>

                {/* Feature Cards */}
                <div
                    ref={ref}
                    className={`feature-grid ${inView ? 'animate-box animated fadeIn' : ''}`}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 'var(--spacing-md)',
                        marginTop: 'var(--spacing-lg)'
                    }}
                >
                    <FeatureCard
                        icon="icon-bulb"
                        title="Geospatial Solutions"
                        description="GIS platforms & spatial analytics"
                        color="color-1"
                    />
                    <FeatureCard
                        icon="icon-globe-outline"
                        title="Earth Sciences"
                        description="Remote sensing & satellite data"
                        color="color-2"
                    />
                    <FeatureCard
                        icon="icon-data"
                        title="Data Engineering"
                        description="Big data pipelines & analytics"
                        color="color-3"
                    />
                    <FeatureCard
                        icon="icon-phone3"
                        title="Full-Stack Development"
                        description="Modern web apps & cloud deployment"
                        color="color-4"
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, description, color }) => {
    return (
        <div className={`feature-card ${color}`} style={{
            padding: '1rem',
            minHeight: 'auto'
        }}>
            <div className="icon2" style={{
                fontSize: '1.5rem',
                marginBottom: '0.75rem'
            }}>
                <i className={icon}></i>
            </div>
            <h3 style={{
                fontSize: '1rem',
                marginBottom: '0.5rem',
                lineHeight: '1.2'
            }}>{title}</h3>
            {description && (
                <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--gray-600)',
                    marginTop: '0.25rem',
                    lineHeight: '1.3',
                    marginBottom: '0'
                }}>{description}</p>
            )}
        </div>
    );
};

export default About;