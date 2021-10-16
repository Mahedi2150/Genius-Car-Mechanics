import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div >

            <img src="https://c.tenor.com/q67xUnEYzicAAAAd/error404.gif" style={{ width: "100%", height: "100vh", }} alt="" />
            <Link style={{ position: "absolute", top: "80%", left: "50%" }} to="/home"><button style={{ border: "none", backgroundColor: "orange ", fontWeight: "bolder" }}> Go Home</button></Link>

        </div>
    );
};

export default NotFound;