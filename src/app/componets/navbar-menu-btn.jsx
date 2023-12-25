import React, { useState } from 'react';
import './navbarMenuBtn.css'; 

const NavbarMenuBtn = ({ onClick, isActive, setIsActive }) => {

    const handleClick = () => {
        setIsActive(!isActive);
        onClick(); 
    };

    return (
        <button className={`navbar-menu-btn ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </button>
    );
};

export default NavbarMenuBtn;