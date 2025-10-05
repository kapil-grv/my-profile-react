import React from 'react';
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const services = [
        {
            icon: "icon-bulb",
            title: "GIS",
            description: "Remote sensing, Earth sciences & spatial analysis"
        },
        {
            icon: "icon-data",
            title: "Databases",
            description: "NoSQL, SQL, geodatabases & spatial grids"
        },
        {
            icon: "icon-phone3",
            title: "Python",
            description: "Spatial packages, APIs, automation & testing"
        },
        {
            icon: "icon-layers2",
            title: "Java / Javascript",
            description: "APIs, web apps, scripting & backend"
        },
        {
            icon: "icon-data",
            title: "Linux",
            description: "RHEL, Ubuntu, DevOps & system management"
        },
        {
            icon: "icon-phone3",
            title: "Other Tools",
            description: "QGIS, ArcGIS, GDAL & development tools"
        }
    ];

    return (
        <section className="colorlib-services" data-section="services">
            <div className="colorlib-narrow-content">
                <div className="section-header">
                    <span className="heading-meta">What I do?</span>
                    <h2 className="colorlib-heading">Here are some of my expertise</h2>
                </div>

                <div
                    ref={ref}
                    className={`services-grid ${inView ? 'animate-box animated fadeIn' : ''}`}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--spacing-md)',
                        marginTop: 'var(--spacing-lg)'
                    }}
                >
                    {services.map((service, index) => (
                        <div key={index} className="service-card" style={{
                            padding: '1.25rem',
                            textAlign: 'center'
                        }}>
                            <div className="icon" style={{
                                fontSize: '2rem',
                                marginBottom: '1rem'
                            }}>
                                <i className={service.icon}></i>
                            </div>
                            <h3 style={{
                                fontSize: '1.1rem',
                                marginBottom: '0.75rem',
                                fontWeight: '700'
                            }}>{service.title}</h3>
                            <p style={{
                                fontSize: '0.85rem',
                                color: 'var(--gray-600)',
                                lineHeight: '1.4',
                                marginBottom: '0'
                            }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
