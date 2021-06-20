import React, { useEffect, useState } from 'react';
import campData from "../fakeData/campaigns.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Camp from './Camp';

const Campaigns = () => {
    const [campInfo, setCampInfo] = useState([])
    useEffect(()=>{
        setCampInfo(campData)
    }, [])
    return (
        <section>
            <div className="d-flex justify-content-between campaign-header px-2 pt-2">
                <div><h6>Referrals & Campaign Stats</h6></div>
                <div>
                    <h6 className="post"><FontAwesomeIcon icon={faPaperPlane}/> 40 Campaigns sent in total</h6>
                    <p>4 Campaigns sent in last month</p>
                </div>
            </div>
            <div className="row">
                {campInfo.map(singleCamp => <Camp singleCamp={singleCamp} key={singleCamp.id}/>)}
            </div>
        </section>
    );
};

export default Campaigns;