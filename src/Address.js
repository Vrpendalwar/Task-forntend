import React from 'react';
import './Address.css';


const Address = () => {
    return (
        <>
            <div className='address'>
                <div className='details'>
                    <h5>SITE OFFICE</h5>
                    <p> Sr. No.:33/3A/1,Hanuman Nagar,Next to Konark Riva, Keshav Nagar, <br></br>
                        Mundhwa-411036<br></br>
                        For Booking Call Us : +91 9850980995</p><br></br>
                    <p className='mi'>Project By </p><br></br>
                </div>
                <div className='imges'>
                    <img src='http://elysiapune.com/asset/Eliseo%20logo.png' alt="" /><br></br>
                    <img src=' http://elysiapune.com/asset/triaa-logo-w.png' alt="" />
                    <br></br>
                    <img src=' http://elysiapune.com/images/mahaera.png' alt="" />
                    <p>MAHARERA Reg. No. P52100029429 </p>
                </div>
            </div>
            <div className='logo2'>
                <img src='http://elysiapune.com/asset/logo.png' alt=''></img>
            </div>
            <div className='middle'></div>
            <div className='copy'>
                <p>© Copyright 2022 Proudly created by SocioGhost<br></br>
                    Privacy Policy</p>
            </div>

        </>
    )
}

export default Address;