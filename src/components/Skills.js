import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const skills = [
        { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png' },
        { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png' },
        { name: 'Javascript', icon: 'https://img.icons8.com/color/48/000000/javascript.png' },
        { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
        { name: 'AWS', icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png' },
        { name: 'GitHub', icon: 'https://img.icons8.com/color/48/000000/github.png' },
        { name: 'Elastic Search', icon: 'https://img.icons8.com/color/48/000000/elasticsearch.png' },
        { name: 'Kibana', icon: 'https://img.icons8.com/color/48/000000/kibana.png' },
        { name: 'Google Earth', icon: 'https://img.icons8.com/color/48/000000/google-earth--v1.png' },
        { name: 'JSON', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/320px-JSON_vector_logo.svg.png' },
        { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
        { name: 'Jenkins', icon: 'https://img.icons8.com/color/48/000000/jenkins.png' },
        { name: 'QGIS', icon: 'https://pbs.twimg.com/profile_images/858603658564513794/KgoQRQa6_400x400.jpg' },
        { name: 'OpenStreetMap', icon: 'https://www.openstreetmap.org/assets/osm_logo-4b074077c29e100f40ee64f5177886e36b570d4cc3ab10c7b263003d09642e3f.svg' },
        { name: 'ArcGIS', icon: 'https://cdn.cookielaw.org/logos/a12bf713-9196-4ac2-bbd2-3fbc53e27ebc/a0804ad5-f295-44f9-9823-009e3946d7ee/esri-logo.png' },
        { name: 'Jupyter', icon: 'https://jupyter.org/assets/logos/rectanglelogo-greytext-orangebody-greymoons.svg' },
        { name: 'GDAL', icon: 'https://gdal.org/_static/gdalicon.png' }
    ];

    return (
        <section id="skills" className="colorlib-skills" data-section="skills">
            <div className="colorlib-narrow-content">
                <div className="section-header">
                    <span className="heading-meta">My Specialty</span>
                    <h2 className="colorlib-heading">My Skills</h2>
                    <p>Here are a few languages and tools I'm well equipped with ...</p>
                </div>
                
                <div
                    ref={ref}
                    className={`skills-grid ${inView ? 'animate-box animated fadeIn' : ''}`}
                >
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <img src={skill.icon} alt={skill.name} />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
