import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Camp = (props) => {
    const { title, count, grow } = props.singleCamp;
    return (
        <div className="col-md-3 text-center camp m-1 px-1 py-2">
            <h6>{title}</h6>
            <p><FontAwesomeIcon icon={faArrowUp}/> {grow}</p>
            <h2>{count}</h2>
        </div>
    );
};

export default Camp;