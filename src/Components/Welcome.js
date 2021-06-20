import React from 'react';
import pink from "../Image/apply-pink.svg";

const Welcome = () => {
    return (
        <section>
            <div className="text-center">
                <h6>Hello, Leonel Messi</h6>
                <p>you have <strong>8</strong> new applications today</p>
            </div>
            <div className="text-center">
                <img src={pink} alt="pink-apply" className="img-fluid"/>
            </div>
        </section>
    );
};

export default Welcome;