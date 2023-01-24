import React from 'react';

const Review = ({reviewC}) => {
    const {des, img,review,reDs}=reviewC
    return (
        <div className="card  shadow-xl">
        <div className="card-body">
            <p>{des}</p>
            <div className="flex items-center">
            <div className="avatar mr-6 mt-4">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img className='' src={img} alt='' />
               
            </div>
                
            </div>
            <div>
                    <h4>{review}</h4>
                    <p>{reDs}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Review;