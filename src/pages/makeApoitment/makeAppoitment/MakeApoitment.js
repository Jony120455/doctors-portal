import React, { useState } from 'react';
import AppoitmentBanner from '../appoitmentBanner/AppoitmentBanner';
import AvalaibleAppoitment from '../AvalaibleAppoitment/AvalaibleAppoitment';

const MakeApoitment = () => {
    const [select, setSelect]=useState(new Date()) 
    return (
        <div>
            <AppoitmentBanner
            
            select={select}
            setSelect={setSelect}
            ></AppoitmentBanner>
            <AvalaibleAppoitment
                 select={select}
            ></AvalaibleAppoitment>
        </div>
    );
};

export default MakeApoitment;