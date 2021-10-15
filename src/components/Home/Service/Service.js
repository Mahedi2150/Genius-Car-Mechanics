import React from 'react';
import "./Service.css"
const Service = (props) => {
    const {name,price,description,img} = props.service
    return (
        <div className="service">
            <img src={img} style={{width:"100%",height:"300px"}} alt="" />
            <h3>Name : {name}</h3>
            <h5>Price : { price}</h5>
            <p className="px-3">{description }</p>
        </div>
    );
};

export default Service;