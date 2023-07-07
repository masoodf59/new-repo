import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Updates from '../Updates/Updates';

const RightSide = () => {
    return (
        <div className='RightSide'>
            <div>
                
                <Updates/>
            </div>

            <div style={{marginTop:"5rem"}}>
                <h3>Customer Review</h3>
                <CustomerReview/>
            </div>
        </div>

        
    );
};

export default RightSide;