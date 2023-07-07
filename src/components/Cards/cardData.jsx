import React from 'react';
import  Card  from '../Card/Card';
import CardInfo  from '../Data/CardInfo';
import "./cardData.css";

const CardData = () => {
    return (
        <div className='Cards'>
            
            { CardInfo.map((data, id) => {
                return (
                    <div className="parentContainer" >
                        <Card
                            title={data.title}
                            color={data.color}
                            barValue={data.barValue}
                            value={data.value}
                            png={data.png}
                            series={data.series}
                        />
                    </div>
                )
                })}
        </div>
    );
};

export default CardData;