import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import positionData from "../fakeData/position.json"
import { Doughnut } from 'react-chartjs-2';

const PositionChart = () => {
    const [chartData, setChartData] = useState({});
    const chart = () => {
        let campData = [];
        let campName = [];
        for(let value of positionData){
            campData.push(parseInt(value.percent));
            campName.push(parseInt(value.title));
        }
        setChartData({
            labels: campData,
            datasets: [
                {
                    label: "Applicants Graph",
                    data: campData,
                    fill: true,
                    backgroundColor: ["rgba(0, 102, 255, 1)", "rgba(102, 0, 255, 1)", "rgba(204, 41, 0, 1)"],
                    borderWidth: 0
                }
            ]
        });
    }
    useEffect(() => {
        chart();
    }, []);

    return (
        <section>
            <div className="d-flex justify-content-between">
                <h6>Open Positions By Dept.</h6>
                <FontAwesomeIcon icon={faEllipsisH}/>
            </div>
            <div>
                <Doughnut
                    data={chartData}
                    height={180}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </section>
    );
};

export default PositionChart;