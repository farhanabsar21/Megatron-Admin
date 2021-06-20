import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import applyData from "../fakeData/applicants.json"

const LineChart = () => {
    const [chartData, setChartData] = useState({});
    // const [employeeSalary, setEmployeeSalary] = useState([]);
    // const [employeeAge, setEmployeeAge] = useState([]);
    
    const chart = () => {
        let empSal = [];
        let empAge = [];
        for(let value of applyData){
            empSal.push(parseInt(value.count));
            empAge.push(parseInt(value.year));
        }
        setChartData({
            labels: empAge,
            datasets: [
                {
                    label: "Applicants Graph",
                    data: empSal,
                    fill: true,
                    backgroundColor: "rgba(204, 41, 0, 0.2)",
                    borderColor: "rgba(204, 41, 0, 1)",
                    borderWidth: 1
                }
            ]
        });
        // axios
        //     .get("http://dummy.restapiexample.com/api/v1/employees")
        //     .then(res => {
        //         for (const value of res.data.data) {
        //             empSal.push(parseInt(value.employee_salary));
        //             empAge.push(parseInt(value.employee_age));
        //         }
        //         setChartData({
        //             labels: empAge.slice(0,6),
        //             datasets: [
        //                 {
        //                     label: "Applicants Graph",
        //                     data: empSal.slice(0,6),
        //                     fill: true,
        //                     backgroundColor: "rgba(204, 41, 0, 0.2)",
        //                     borderColor: "rgba(204, 41, 0, 1)",
        //                     borderWidth: 1
        //                 }
        //             ]
        //         });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    };

    useEffect(() => {
        chart();
    }, []);
    return (
        <section className="line-chart">
            <div className="chart-head justify-content-between d-flex align-items-center p-2">
                <div><h5>Applications Received</h5></div>
                <div>
                    <button>This Year</button>
                    <button>This Week</button>
                    <button>Today</button>
                    <button><FontAwesomeIcon icon={faDownload}/> Download Report</button>
                    <button><FontAwesomeIcon icon={faEllipsisV}/></button>
                </div>
            </div>
            <div className="main-chart">
                <Line
                    data={chartData}
                    height={"70%"}
                    options={{
                        responsive: true,
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
                                        display: true
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

export default LineChart;