import React, { useState } from 'react';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>My Diary</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Entry</a>
                <a href="/profile">Profile Insights</a>
                <a href="/logout">Log Out</a>
            </div>
        </nav>
    );
}
 
export default Navbar;