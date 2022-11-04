import React from "react";
import img from '../404-error.jpg';

const ErrorPage = () => {
    return (
        <div className="img">
           <img src={img} width="500" height="300" alt="404-error"/>
        </div>
    );
};

export default ErrorPage;
