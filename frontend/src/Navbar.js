import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>My Diary</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Entry</Link>
                <Link to="/profile">Profile Insights</Link>
                <Link to="/logout">Log Out</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;