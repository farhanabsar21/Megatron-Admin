import React from 'react';
import Home from './Home';
import Sidebar from './Sidebar';
import "../App.css"

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="row">
                <div className="col-md-1 Sidebar">
                    <Sidebar />
                </div>
                <div className="col-md-11 Home">
                    <Home />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;