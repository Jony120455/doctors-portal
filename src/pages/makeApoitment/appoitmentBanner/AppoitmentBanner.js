import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import {  DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppoitmentBanner = ({select,setSelect}) => {

    
    return (
        <div className="hero mt-16 p-6 mr-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='dentist chair' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                    mode='single'
                    selected={select}
                    onSelect={setSelect}
                    
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppoitmentBanner;