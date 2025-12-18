import { useState, useEffect } from 'react';
import logoSrc from '../Images/logo.png';

const Navbar = ({ handleNav }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navAndClose = (ev, link) => {
    ev.preventDefault();

    // force-close desktop hover dropdown
    const navList = document.querySelector('.nav-list');
    navList?.classList.add('closing');

    handleNav(ev, link);
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle) navToggle.checked = false;
    setActiveDropdown(null);

    // allow hover again after click
    setTimeout(() => {
        navList?.classList.remove('closing');
    }, 0);
};


    useEffect(() => {
        const mq = window.matchMedia('(min-width: 930px)');
        const onChange = (e) => {
            if (e.matches) setActiveDropdown(null);
        };
        if (mq.addEventListener) mq.addEventListener('change', onChange);
        else mq.addListener(onChange);
        return () => {
            if (mq.removeEventListener) mq.removeEventListener('change', onChange);
            else mq.removeListener(onChange);
        };
    }, []);

    return (
        <div>
            <nav>
                <div id="logo">
                    <a
                        href="#"
                        className="logo-link"
                        onClick={(ev) => {
                            ev.preventDefault();
                            navAndClose(ev, 'home');
                        }}
                    >
                        <img src={logoSrc} alt="Cantor College logo" className="logo-img" />
                    </a>
                </div>


                <input type="checkbox" id="nav-toggle" className="nav-toggle" />

                <label htmlFor="nav-toggle" className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <ul className="nav-list">
                    <li>
                        <a href="#" onClick={(ev) => navAndClose(ev, 'home')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(ev) => navAndClose(ev, 'about us')}>
                            About Us
                        </a>
                    </li>

                    <li className="dropdown" onMouseLeave={() => setActiveDropdown(null)}>
                        <button
                            className="dropdown-toggle"
                            type="button"
                            onClick={(e)=>{
                                e.preventDefault();
                                if (window.innerWidth < 930) {
                                    setActiveDropdown(a => a===1? null : 1);
                                }
                            }}
                        >Courses ▼</button>
                        <ul className={`submenu ${activeDropdown===1 ? 'show' : ''}`}>
                            <li>
                                <a href="#" onClick={(ev) => navAndClose(ev, 'computing courses')}>
                                    Computing Courses
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(ev) => navAndClose(ev, 'design courses')}>
                                    Design Courses
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown" onMouseLeave={() => setActiveDropdown(null)}>
                        <button
                            className="dropdown-toggle"
                            type="button"
                            onClick={(e)=>{
                                e.preventDefault();
                                if (window.innerWidth < 930) {
                                    setActiveDropdown(a => a===2? null : 2);
                                }
                            }}
                        >Campus ▼</button>
                        <ul className={`submenu ${activeDropdown===2 ? 'show' : ''}`}>
                            <li>
                                <a href="#" onClick={(ev) => navAndClose(ev, 'how to find us')}>
                                    How To Find Us
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(ev) => navAndClose(ev, 'facilities')}>
                                    Facilities
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(ev) => navAndClose(ev, 'learning resources')}>
                                    Learning Resources
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown" onMouseLeave={() => setActiveDropdown(null)}>
                        <button
                            className="dropdown-toggle"
                            type="button"
                            onClick={(e)=>{
                                e.preventDefault();
                                if (window.innerWidth < 930) {
                                    setActiveDropdown(a => a===3? null : 3);
                                }
                            }}
                        >Information ▼</button>
                        <ul className={`submenu ${activeDropdown===3 ? 'show' : ''}`}>
                            <li>
                                <a href="#" onClick={(ev) => navAndClose(ev, 'information for students')}>
                                    Information for Students
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(ev) => navAndClose(ev, 'information for staff')}>
                                    Information for Staff
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" onClick={(ev) => navAndClose(ev, 'business')}>
                            Business
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(ev) => navAndClose(ev, 'contact us')}>
                            Contact Us
                        </a>
                    </li>
                </ul>


            </nav>
        </div>
    );
};

export default Navbar;