import React from 'react';
import logo from "../Img/logo.jpg";
import "./sidebar.css";
import SidebarData from '../Data/SidebarData';
import { useState } from 'react';

const Sidebar = () => {
    const[selected,setSelected]=useState(0);
    return (
        <>
          <div className="sidebar">
            <div className="logo">
                <img className='LogoImg' src={logo} alt="" />
                <span className='LogoText'>Shops</span>
            </div>
            

            {/* Main Part */}

            <div className="main">
{
    SidebarData.map((Routes,index)=>{
return(
    
    <div className={selected ===index?'menuItems active':'menuItems'}
    key={index}

    onClick={()=>setSelected(index)}
    >
         <Routes.icon/>
        {Routes.title}
    </div>
   
    
)
    })
}
            </div>
            </div>
        </>
    );
};

export default Sidebar;