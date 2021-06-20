import React from 'react';
import '../App.css';
import logo from "../Image/dash-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartLine, faChalkboard, faFolder, faCalendar, faUserFriends, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <section className="Sidebar-content">
            <div className="logo d-flex justify-content-center align-items-center">
                <img src={logo} alt="brand-logo" />
            </div>
            <div className="menu-items text-center">
                <div className="menu-items-icon active">
                    <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="menu-items-icon">
                    <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div className="menu-items-icon">
                    <FontAwesomeIcon icon={faChalkboard} />
                </div>
                <div className="menu-items-icon">
                    <FontAwesomeIcon icon={faFolder} />
                </div>
                <div className="menu-items-icon">
                    <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className="menu-items-icon">
                    <FontAwesomeIcon icon={faUserFriends} />
                </div>
                <div className="menu-items-icon">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
            </div>
            <div className="settings d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faCog} />
            </div>
        </section>
    );
};

export default Sidebar;