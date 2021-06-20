import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from './Header';
import growthData from "../fakeData/progress.json"
import GrowInfo from './GrowInfo';
import LineChart from './LineChart';
import Progress from './Progress';
import Campaigns from './Campaigns';
import PositionChart from './PositionChart';
import Welcome from './Welcome';
import Users from './Users';

const Home = () => {
    const [growth, setGrowth] = useState([]);
    useEffect(()=> {
        setGrowth(growthData)
    }, [])

    return (
        <div className="home-container">
            <div>
                <Header />
            </div>
            <div className="main-content p-2 mx-2">
                <div className="row">
                    <div className="col-md-9">
                        {/* status */}
                        <div className="row grow-data">
                            {growth.map((grow, index) => <GrowInfo grow={grow} key={index}></GrowInfo>)}
                        </div>
                        {/* graph */}
                        <div className="row my-2">
                            <div className="col-md-8 p-2 line-graph">
                                <LineChart/>
                            </div>
                            <div className="col-md-4 p-4 progress-graph">
                                <Progress/>
                            </div>
                        </div>
                        {/* campaign */}
                        <div className="row">
                            <div className="col-md-8 px-3 py-2 campaigns mt-1">
                                <Campaigns/>
                            </div>
                            <div className="col-md-4 p-4 position-graph">
                                <PositionChart/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row welcome p-2">
                            <Welcome/>
                        </div>
                        <div className="row user-list p-2">
                            <Users/>
                        </div>
                        <div className="row camp-btn d-flex align-items-center">
                            <div className="col-md-6"><button className="start-camp">Star New Campaign</button></div>
                            <div className="col-md-6"><button className="end-camp">Cancel Campaign</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;