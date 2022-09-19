import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <div className='navBar'>
                    <div className='logo'>
                        <img src='http://elysiapune.com/asset/logo.png' alt=''></img>
                    </div>
                    <ul>
                        <a href="#OVERVIEW">OVERVIEW</a>
                        <a href="#DECOR<">DECOR</a>
                        <a href="#AMENITIES">AMENITIES</a>
                        <a href="#GALLERY">GALLERY</a>
                        <a href="#LOCATION">LOCATION</a>
                        <a href="#CONTACT US">CONTACT US</a>
                    </ul>
                </div>
            </div>
            <div className='bannerBG'>
                <img src='http://elysiapune.com/asset/banner.png' alt=""></img>
            </div>


        </>
    )
}

export default Navbar;