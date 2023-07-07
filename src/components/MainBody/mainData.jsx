import React from 'react';
import CardData from '../Cards/cardData';


import Table from '../Table/Table';
import "./mainData.css";
const MainData = () => {
    return (
        <div className='MainData'>
            <h1>Dashboard</h1>
            <CardData />
            <Table />
            



        </div>
    );
};

export default MainData;