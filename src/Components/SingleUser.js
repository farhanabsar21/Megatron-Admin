import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const SingleUser = (props) => {
    const { name, email, picture } = props.single;
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex mt-2">
                <div><img src={picture.large} alt="user-pic" /></div>
                <div className="user-info">
                    <h6>{`${name.first} ${name.last}`}</h6>
                    <small>{email}</small>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faCommentDots} />
            </div>
        </div>
    );
};

export default SingleUser;