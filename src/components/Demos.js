import React from 'react';
import { useInView } from 'react-intersection-observer';

const Demos = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const demos = [
        {
            image: "/images/Webmap.png",
            title: "Geotag",
            description: "Advanced geotagging and location mapping platform for social interactions",
            link: "https://geotag.mapout.sbs",
            docLink: null
        },
        {
            image: "/images/Webgis.png",
            title: "MapOut Platform",
            description: "Comprehensive Travel Assistant Platform",
            link: "https://mapout.sbs",
            docLink: null
        }
    ];

    return (
        <section id="demos" className="colorlib-demo" data-section="demos">
            <div className="colorlib-narrow-content">
                <div className="section-header">
                    <span className="heading-meta">Demos</span>
                    <h2 className="colorlib-heading">Live Projects</h2>
                    <p>Explore my geospatial web applications</p>
                </div>

                <div
                    ref={ref}
                    className={`demo-grid ${inView ? 'animate-box animated fadeIn' : ''}`}
                >
                    {demos.map((demo, index) => (
                        <div key={index} className="demo-card">
                            <img src={demo.image} alt={demo.title} />
                            <div className="demo-content">
                                <h3>{demo.title}</h3>
                                {demo.description && (
                                    <p style={{
                                        color: 'var(--gray-600)',
                                        fontSize: '0.9rem',
                                        marginBottom: '1rem'
                                    }}>
                                        {demo.description}
                                    </p>
                                )}
                                <p>
                                    <a href={demo.link} target="_blank" rel="noopener noreferrer">
                                        Visit Application →
                                    </a>
                                </p>
                                {demo.docLink && (
                                    <p>
                                        <a href={demo.docLink} target="_blank" rel="noopener noreferrer">
                                            Documentation →
                                        </a>
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Demos;