import React from 'react';
import { useInView } from 'react-intersection-observer';

const ToolsPackages = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const tools = [
        {
            image: "/images/logo-small.6eef541e.svg",
            alt: "h3converter Logo",
            link: "https://pypi.org/project/h3converter/",
            title: "h3converter"
        },
        {
            image: "https://d3g9o9u8re44ak.cloudfront.net/logo/81676047-68b2-4197-9014-da4b59ea4ac1/fb3dfd0d-2ba5-4fe6-8f39-8df6c5db2cad.png",
            alt: "elasticsearch_loader Logo",
            link: "https://github.com/kapil-grv/qgis-plugins/blob/main/elasticsearch_loader/README.MD",
            title: "Elasticsearch Loader"
        }
    ];

    return (
        <section id="tools-and-packages" className="colorlib-skills" data-section="skills">
            <div className="colorlib-narrow-content">
                <div className="section-header">
                    <span className="heading-meta">Open Source</span>
                    <h2 className="colorlib-heading">Tools and Packages</h2>
                </div>
                
                <div
                    ref={ref}
                    className={`tools-grid ${inView ? 'animate-box animated fadeIn' : ''}`}
                >
                    {tools.map((tool, index) => (
                        <div key={index} className="tool-card">
                            <img src={tool.image} alt={tool.alt} />
                            <h4><a href={tool.link} target="_blank" rel="noopener noreferrer">{tool.title}</a></h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsPackages;
