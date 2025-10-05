import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <aside
            id="colorlib-aside"
            className={`border js-fullheight ${isOpen ? 'offcanvas' : ''}`}
        >
            <div className="text-center">
                <div
                    className="author-img"
                    style={{
                        backgroundImage: 'url(/images/about.jpg)',
                        position: 'relative'
                    }}
                ></div>
                <h1 id="colorlib-logo">
                    <a href="#home">Kapil Gauravan V</a>
                </h1>
                <span className="position">
                    <a href="https://en.wikipedia.org/wiki/Geographic_information_system" target="_blank" rel="noopener noreferrer">
                        GIS Engineer & Developer
                    </a> from India
                </span>
            </div>

            <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar">
                    <ul>
                        <li>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                                onClick={toggleSidebar}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                                onClick={toggleSidebar}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                                onClick={toggleSidebar}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="demos"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                                onClick={toggleSidebar}
                            >
                                Demo's
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                                onClick={toggleSidebar}
                            >
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                                onClick={toggleSidebar}
                            >
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="blog"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                                onClick={toggleSidebar}
                            >
                                Papers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                                onClick={toggleSidebar}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="colorlib-footer">
                <ul>
                    <li>
                        <a href="https://github.com/kapil-grv" title="GitHub Profile" target="_blank" rel="noopener noreferrer">
                            <i className="icon-git" style={{ color: 'black' }}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/kapilgr" title="Facebook Profile" target="_blank" rel="noopener noreferrer">
                            <i className="icon-facebook2" style={{ color: 'black' }}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/kapil_grv/" title="Instagram Profile" target="_blank" rel="noopener noreferrer">
                            <i className="icon-instagram" style={{ color: 'black' }}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kapil-gauravan-v-13544888/" title="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                            <i className="icon-linkedin2" style={{ color: 'black' }}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.cakeresume.com/s--WmlpsofOAodR5aSQ51__Yg--/kapil-grv" title="Download Resume" target="_blank" rel="noopener noreferrer">
                            <i className="icon-download" style={{ color: 'black' }}></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
