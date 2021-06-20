import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const GrowInfo = (props) => {
    const { title, count, grow, percent , id} = props.grow;
    const percentage = percent;
    return (
        <div className="col-md-4 grow-info p-3 m-1" id={`growInfo`+id}>
            <div className="d-flex justify-content-between align-items-center p-1">
                <h5>{title}</h5>
                <FontAwesomeIcon icon={faEllipsisH}/>
            </div>
            <div className="d-flex justify-content-between align-items-center p-1">
                <div>
                    <h2>{count}</h2>
                    <p><span className="grow-arrow"><FontAwesomeIcon icon={faArrowUp}/></span> {grow}</p>
                </div>
                <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`}/>
                </div>
            </div>
        </div>
    );
};

export default GrowInfo;