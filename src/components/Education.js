import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Education = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const [openPanel, setOpenPanel] = useState(0);

    const togglePanel = (index) => {
        setOpenPanel(openPanel === index ? -1 : index);
    };

    const educationData = [
        {
            title: 'Master of Science (M.Sc) in Geographic Information Systems',
            institution: 'University of Mysore, Manasagangothri Campus, Mysuru, Karnataka, India',
            period: 'July 2016 - June 2018',
            details: null,
            achievement: '🏆 Gold Medalist - 2016-2018 Batch',
            leadership: 'Led and managed all social activities and events conducted by the department'
        },
        {
            title: 'Bachelor of Science (B.Sc) in Earth Science and Resource Management',
            institution: 'University of Mysore, Yuvarajas College, Mysuru, Karnataka, India',
            period: 'July 2013 - June 2016',
            details: [
                'Earth Science and Disaster Management (Geology)',
                'Botany',
                'Zoology'
            ],
            leadership: 'Led and managed events hosted by the Geology department. Participated in cultural team and headed the Geology department.'
        },
        {
            title: 'Pre-University Course (PUC) - Higher Secondary',
            institution: 'St. Philomena\'s College, Mysuru, Karnataka, India',
            period: 'July 2011 - May 2013',
            details: [
                'Mathematics',
                'Biology',
                'Chemistry',
                'Physics'
            ],
            leadership: 'Actively engaged in academic and extracurricular activities'
        }
    ];

    return (
        <section id="education" className="colorlib-education" data-section="education">
            <div className="colorlib-narrow-content">
                <div className="section-header">
                    <span className="heading-meta">Education</span>
                    <h2 className="colorlib-heading">Academic Background</h2>
                    <p>Strong foundation in Geospatial Sciences and Earth Sciences</p>
                </div>

                <div
                    ref={ref}
                    className={`education-list ${inView ? 'animate-box animated fadeIn' : ''}`}
                >
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-item">
                            <div
                                className={`education-header ${openPanel !== index ? 'collapsed' : ''}`}
                                onClick={() => togglePanel(index)}
                            >
                                <div>
                                    <h4>{edu.title}</h4>
                                    {edu.achievement && openPanel === index && (
                                        <div style={{
                                            fontSize: '0.9rem',
                                            marginTop: '0.5rem',
                                            fontWeight: '600',
                                            color: 'white'
                                        }}>
                                            {edu.achievement}
                                        </div>
                                    )}
                                </div>
                                <i className={`icon-${openPanel === index ? 'minus' : 'plus'}`}></i>
                            </div>
                            {openPanel === index && (
                                <div className="education-body">
                                    {edu.achievement && (
                                        <div style={{
                                            padding: '1rem',
                                            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                                            borderRadius: 'var(--radius-md)',
                                            marginBottom: '1rem',
                                            border: '2px solid #f59e0b',
                                            textAlign: 'center'
                                        }}>
                                            <strong style={{ fontSize: '1.1rem', color: '#92400e' }}>
                                                {edu.achievement}
                                            </strong>
                                        </div>
                                    )}
                                    <div className="education-details">
                                        <p><strong>Institution:</strong> {edu.institution}</p>
                                        <p><strong>Period:</strong> <i>{edu.period}</i></p>
                                    </div>
                                    {edu.details && (
                                        <>
                                            <p><strong>Subjects of Focus:</strong></p>
                                            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                                                {edu.details.map((subject, idx) => (
                                                    <li key={idx}>{subject}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {edu.leadership && (
                                        <div style={{
                                            padding: '1rem',
                                            background: 'var(--gray-100)',
                                            borderRadius: 'var(--radius-md)',
                                            marginTop: '1rem',
                                            borderLeft: '3px solid var(--primary-500)'
                                        }}>
                                            <strong>Leadership & Activities:</strong>
                                            <p style={{ marginTop: '0.5rem', marginBottom: '0' }}>{edu.leadership}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;