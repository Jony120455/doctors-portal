import React from 'react';

const AvalaibleOption = ({option,setTretment}) => {
    const {name,price, slots}=option
    return (
        <div className="card  shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-primary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0]:'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'speces': 'spece'}</p>
                <p>Price:{price}$</p>
                <div className="card-actions justify-center">
                <label onClick={() => setTretment(option)} htmlFor="booking-modal" className="btn btn-primary text-white">Make Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AvalaibleOption;