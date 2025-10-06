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
        },
        {
            image: "https://lh3.googleusercontent.com/Uz1gOYqFW6vycSS31ZH1siggk1q50gOCfqS8C8tAsuRu0Lt9rxJh5B71uG4OkjQzTBpOSeY1pyQqY9sPZ3Bcj2RKoQ=s1280-w1280-h800",
            title: "GeoData Viewer",
            description: "Chrome extension for loading and visualizing geospatial data (GeoJSON, Shapefile, CSV)",
            link: "https://chromewebstore.google.com/detail/geodata-viewer/cbcgbalkmhnlhhlcjdhogncdnccbaodp",
            docLink: null
        },
        {
            image: "https://lh3.googleusercontent.com/aU8MXod5Fbo0X0dqppEm0R9MydBhTTh2fb8EIgujES7eaTV4FS_anYBlAFTdrBta9Dt3RaM0YB7YMkp6Tene3g9tXUQ=s1280-w1280-h800",
            title: "Elasticsearch Explorer",
            description: "Chrome extension for connecting to and exploring Elasticsearch indices with download capabilities",
            link: "https://chromewebstore.google.com/detail/elasticsearch-explorer/pphmghmpbfobljccblggdppbmdfidjcf",
            docLink: null
        },
        {
            image: "https://miro.medium.com/v2/resize:fit:2000/1*DfBbVqPXfIXGFQCa1BrV8g.jpeg",
            title: "Elasticsearch Loader",
            description: "QGIS plugin for connecting to Elasticsearch and loading geospatial data as layers",
            link: "https://plugins.qgis.org/plugins/elasticsearch_loader/",
            docLink: "https://github.com/kapil-grv/qgis-plugins/blob/main/elasticsearch_loader/README.MD"
        },
        {
            image: "https://img.itch.zone/aW1nLzE5ODkzOTI5LnBuZw==/original/AaQqot.png",
            title: "Aim Dot",
            description: "Versatile crosshair overlay tool for enhanced aiming precision in FPS games like Apex Legends, Call of Duty, and Fortnite",
            link: "https://kapilgrv.itch.io/aim-dot-crosshair",
            docLink: "https://github.com/kapil-grv/aim-dot-crosshair/blob/main/README.md"
        }
    ];

    return (
        <section id="demos" className="colorlib-demo" data-section="demos">
            <div className="colorlib-narrow-content">
                <div className="section-header">
                    <span className="heading-meta">Projects</span>
                    <h2 className="colorlib-heading">Published Tools & Applications</h2>
                    <p>Explore my published geospatial tools, extensions, and web applications</p>
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