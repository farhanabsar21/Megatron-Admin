import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Users = () => {
    const [user, setUser] = useState([])
    useEffect(()=> {
        fetch("https://randomuser.me/api/?results=4")
            .then(res => res.json())
            .then(data => setUser(data.results))
    }, [])
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center"><h6>New Applicants</h6> <span className="arrow-right-icon"><FontAwesomeIcon icon={faArrowRight} /></span></div>
            <div>
                {user.map((single,index) => <SingleUser single={single} key={index}/>)}
            </div>
        </div>
    );
};

export default Users;