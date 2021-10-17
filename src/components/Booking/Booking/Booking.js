import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';

const Booking = () => {
    const { serviceId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const item = data.filter(mecanic => mecanic.id == serviceId)
    console.log(item);
    return (
        <div>
            <h2>This is booking : {serviceId}</h2>
            <p>Name : {item[0]?.name}</p>
            <h5>Price : {item[0]?.price}</h5>
            <p><i>{item[0]?.description}</i></p>
        </div>
    );
};

export default Booking;