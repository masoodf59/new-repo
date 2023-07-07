import React from 'react';
import UpdatesData from '../Data/UpdatesData';
import "./Updates.css";

const Updates = () => {
    return (
        <div className="parent">
            <h3>Updates</h3>

        <div className='Updates'>
            
            {UpdatesData.map((update) => {
                return (
                    <div className="update">
                        <img src={update.img} alt="" />
                        <div className="noti">
                            <div style={{ marginBottom: '0.5rem' }}>
                                <span>{update.name}</span>
                                <span>{update.noti}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>

                      
                            
                        

                    </div>
                )
            })}

        </div>
        </div>
    );
};

export default Updates;