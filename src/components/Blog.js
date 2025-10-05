import React from 'react';
import { useInView } from 'react-intersection-observer';

const Blog = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const papers = [
        {
            title: 'Physico-Chemical and biological Analysis',
            description: 'Study of the Physico-Chemical and biological characteristics of Hebbal lake, Mysuru city, Karnataka, Mysuru',
            image: '/images/awesome-lake.jpg',
            date: 'Feb, 2016',
            type: 'Research Paper',
            views: 94,
            link: 'https://www.academia.edu/23753825/STUDY_OF_THE_PHYSICOCHEMICAL_AND_BIOLOGICAL_CHARACTERISTICS_OF_HEBBAL_LAKE_MYSORE_CITY_KARNATAKA_Mysuru_As_a_part_of_curriculum_of_the_Bachelor_Course_in_Earth_Science_and_Resource_Management'
        },
        {
            title: 'Land Surface Temperature Study',
            description: 'A Comparative study of Land Surface Temperature of Hubli, Karnataka using Remote Sensing and GIS Technique',
            image: '/images/Sentinel-2_H1.jpg',
            date: 'Dec, 2017',
            type: 'Research Paper',
            views: 61,
            link: 'https://www.academia.edu/31905862/A_Comparative_study_of_Land_Surface_Temperature_of_Hubli_Karnataka_using_Remote_Sensing_and_GIS_Technique'
        },
        {
            title: 'Potential Groundwater and Borehole Location Information System: A WebGIS Based Case Study',
            description: 'This case study explores the development and implementation of a Potential Groundwater and Borehole Location Information System utilizing WebGIS technology.',
            image: '/images/groundwater.jpg',
            date: 'March, 2018',
            type: 'Research Paper',
            views: 26,
            link: 'https://www.academia.edu/110614953/Potential_Groundwater_and_Borehole_Location_Information_System_A_WebGIS_Based_Case_Study'
        },
        {
            title: 'Load and Visualize FlatGeobuf Files Using Deck.gl',
            description: 'A technical guide on loading and visualizing FlatGeobuf files using the Deck.gl framework for high-performance data visualization.',
            image: 'https://deck.gl/images/visgl-logo-dark.png',
            date: 'Nov, 2024',
            type: 'Article',
            views: 26,
            link: 'https://medium.com/@kapilgrv/load-and-visualize-flatgeobuf-files-using-deck-gl-0fb1292a903e'
        }
    ];

    return (
        <section id="blog" className="colorlib-blog" data-section="blog">
            <div className="colorlib-narrow-content">
                <div className="section-header">
                    <span className="heading-meta">Read</span>
                    <h2 className="colorlib-heading">Research, Papers and Articles</h2>
                </div>
                
                <div
                    ref={ref}
                    className={`blog-grid ${inView ? 'animate-box animated fadeIn' : ''}`}
                >
                    {papers.map((paper, index) => (
                        <div key={index} className="blog-card">
                            <div className="blog-img">
                                <img src={paper.image} alt={paper.title} />
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <small>{paper.date}</small>
                                    <small>{paper.type}</small>
                                    <small><i className="icon-bubble3"></i> {paper.views}</small>
                                </div>
                                <h3>
                                    <a href={paper.link} target="_blank" rel="noopener noreferrer">
                                        {paper.title}
                                    </a>
                                </h3>
                                <p>{paper.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;