import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Progress = () => {
    return (
        <section>
            <div>
                <h6>Total Applications</h6>
            </div>
            <div>
                <div className="progress-info d-flex justify-content-between align-items-center p-1" id="progressOne">
                    <div className="mb-3"><FontAwesomeIcon icon={faCircle} /></div>
                    <div><p>Applications</p></div>
                    <div className="progress-bar mb-3">
                        <div className="progress-bar-fill"></div>
                    </div>
                </div>
                <div className="progress-info d-flex justify-content-between align-items-center p-1" id="progressTwo">
                    <div className="mb-3"><FontAwesomeIcon icon={faCircle} /></div>
                    <div><p>Pending</p></div>
                    <div className="progress-bar mb-3">
                        <div className="progress-bar-fill"></div>
                    </div>
                </div>
                <div className="progress-info d-flex justify-content-between align-items-center p-1" id="progressThree">
                    <div className="mb-3"><FontAwesomeIcon icon={faCircle} /></div>
                    <div><p>Canceled</p></div>
                    <div className="progress-bar mb-3">
                        <div className="progress-bar-fill"></div>
                    </div>
                </div>
                <div className="progress-info d-flex justify-content-between align-items-center p-1" id="progressFour">
                    <div className="mb-3"><FontAwesomeIcon icon={faCircle} /></div>
                    <div><p>Successful</p></div>
                    <div className="progress-bar mb-3">
                        <div className="progress-bar-fill"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Progress;