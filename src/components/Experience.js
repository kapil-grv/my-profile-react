import React from 'react';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const experiences = [
        {
            company: 'Dfy Graviti',
            position: 'Senior Software Engineer',
            period: 'March 2025 - Present',
            description: 'Developing and maintaining geospatial platforms for real-time big data analytics. Building platforms for Earth observation, maritime tracking and intelligence, and real estate applications. Leading development of scalable geospatial solutions across multiple industry verticals.',
            link: 'https://dfy-graviti.com/',
            logo: 'https://storage.tally.so/baf9602e-8643-47bb-8aca-a570b811a8de/Webclip.png'
        },
        {
            company: 'Alphabyte Ventures',
            position: 'Lead Software Engineer',
            period: 'May 2024 - March 2025',
            description: 'Developed and maintained geospatial data interfaces for location-based audience targeting. Worked on real-time bidding (RTB) platforms incorporating AI and machine learning. Enhanced client-side platforms for targeted advertising with advanced spatial features.',
            link: 'https://www.alphabyte.com/',
            logo: 'https://media.licdn.com/dms/image/v2/D560BAQH84ZbAZHj_sw/company-logo_200_200/company-logo_200_200/0/1704104193644?e=1762387200&v=beta&t=9pMFbgw9rBTH-j8hl09wxWePS-odkr7XgAs7jYusjJw'
        },
        {
            company: 'Reliance Jio (Jio Platforms)',
            position: 'Software Developer (Manager)',
            period: 'September 2022 - May 2024',
            description: 'Built and maintained geospatial data and interfaces for location-based audience targeting. Developed databases to store POI and user data. Created API frameworks for visualization in internal UI platforms using Node.js and React.js. Managed team of developers working on spatial data solutions.',
            link: 'https://jio.com',
            logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQHsccIYLfHAyg/company-logo_100_100/company-logo_100_100/0/1662034026231/jioads_logo?e=1762387200&v=beta&t=XEjTnIvJMiNKUrQ-qVGRaFHq5Lc29-G6SlqhMDyJVn0'
        },
        {
            company: 'Near Intelligence Inc',
            position: 'Senior GIS Engineer',
            period: 'May 2021 - September 2022',
            description: 'Managed geospatial data and developed applications and APIs. Built tools and features, implemented automation and CI/CD pipelines. Automated location extraction via API and database updates with alerts. Revamped data export platforms processing user data to client-side via API or AWS S3. Created dashboards and data visualization applications using React.js.',
            link: 'https://azira.com',
            logo: 'https://media.licdn.com/dms/image/v2/D560BAQFTsP3My8aGVQ/company-logo_200_200/company-logo_200_200/0/1709270381454/azira_llc_logo?e=1762387200&v=beta&t=n1B_VlArhhCEyScfeYCjCAZa7b8DWdEtkvA0Y1hFfls'
        },
        {
            company: 'Near Intelligence Inc',
            position: 'GIS Engineer',
            period: 'May 2019 - April 2021',
            description: 'Managed geospatial data, developed applications and APIs using Java and Python. Automated operations and server management on AWS. Performed data analytics using PySpark. Built UI for internal data visualization using Node.js, React.js, and MongoDB. Created tools for geospatial data manipulation including automation of geocoding, reverse geocoding, and indexing.',
            link: 'https://azira.com',
            logo: 'https://media.licdn.com/dms/image/v2/D560BAQFTsP3My8aGVQ/company-logo_200_200/company-logo_200_200/0/1709270381454/azira_llc_logo?e=1762387200&v=beta&t=n1B_VlArhhCEyScfeYCjCAZa7b8DWdEtkvA0Y1hFfls'
        },
        {
            company: 'Near Intelligence Inc',
            position: 'GIS Analyst',
            period: 'June 2018 - April 2019',
            description: 'Extracted location data through web scraping and external sources. Performed geospatial analysis and analytics, managed databases, and automated processes. Conducted GPS location-based research and analysis. Key role in extracting, analyzing, and updating databases with entity location data. Created and modified POIs on ArcGIS/QGIS for storage and API-based fetch.',
            link: 'https://azira.com',
            logo: 'https://media.licdn.com/dms/image/v2/D560BAQFTsP3My8aGVQ/company-logo_200_200/company-logo_200_200/0/1709270381454/azira_llc_logo?e=1762387200&v=beta&t=n1B_VlArhhCEyScfeYCjCAZa7b8DWdEtkvA0Y1hFfls'
        },
        {
            company: 'Egis India',
            position: 'LiDAR Engineer - Intern',
            period: 'January 2018 - March 2018',
            description: 'Classifying LAS datasets for various classes using Microstation (Bentley) software. Processed and analyzed LiDAR point cloud data for infrastructure projects.',
            link: 'https://www.egis-india.com/',
            logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEAd0aSequAmQ/company-logo_100_100/company-logo_100_100/0/1666266859617/egis_logo?e=1762387200&v=beta&t=R9TqVD3QfLogTRQG68GAMgcPYp3Svhmy0aJLn7GiJOA'
        }
    ];

    return (
        <section id="experience" className="colorlib-experience" data-section="experience">
            <div className="colorlib-narrow-content">
                <div className="section-header">
                    <span className="heading-meta">Experience</span>
                    <h2 className="colorlib-heading">Professional Journey</h2>
                    <p>Over 7 years of experience in geospatial technologies and software development</p>
                </div>

                <div
                    ref={ref}
                    className={`timeline ${inView ? 'animate-box animated fadeIn' : ''}`}
                >
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-icon">
                                <img
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        objectFit: 'contain',
                                        borderRadius: '50%',
                                        backgroundColor: 'white',
                                        padding: '8px',
                                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                        border: '3px solid var(--gray-100)'
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div
                                    style={{
                                        display: 'none',
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: 'var(--primary-500)',
                                        borderRadius: '50%',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem'
                                    }}
                                >
                                    {exp.company.charAt(0)}
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h2>
                                    <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                        {exp.position} at <strong>{exp.company}</strong>
                                    </a>
                                    <span>{exp.period}</span>
                                </h2>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;