import React from 'react';

const InfoCard = ({card}) => {
    const {name, info, icon,color} = card;
    return (
                    <div className={`card md:card-side text-white bg-base-100 p-4 shadow-xl ${color}`}>
            <figure><img src={icon} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{info}</p>
            </div>
            </div>
    );
};

export default InfoCard;