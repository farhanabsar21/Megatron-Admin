import React from 'react';
import Moment from 'react-moment';
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import user from "../Image/messi.jpg";

const Header = () => {
    
    const currentDateTime = moment()
    return (
        <div className="Header px-2 d-flex justify-content-between align-items-center">
            <div className="dash-headings">
                <h2>Dashboard</h2>
                <p><Moment format="dddd, MMMM Do YYYY">{currentDateTime}</Moment></p>
            </div>
            <div className="user-info">
                <div className="user-data px-3 py-2 d-flex justify-content-end">
                    <div className="mx-2"><FontAwesomeIcon icon={faBell}/></div>
                    <div className="mx-2"><p>Leonel Messi</p></div>
                    <div className="mx-2"><img src={user} alt="user" /></div>
                    <div className="arrow mr-2 mb-2"><span>{">"}</span></div>
                </div>
                <div className="search-area d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /> Add</button>
                    <div>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder="search for applications here" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;