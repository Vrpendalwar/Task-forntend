import React, { useEffect, useState } from 'react';
import './Contact.css';
import axios from 'axios';


const Contact = () => {

    const [userData, setUserData] = useState();
    const [Name, setName] = useState("");
    const [Emailid, setEmailid] = useState("");
    const [Mobnumber, setMobnumber] = useState(0);


    const submitHandler = (e) => {
        e.preventDefault();

        const dataObj = {
            Name,
            Mobnumber,
            Emailid
        }

        console.log(dataObj);
        axios.post("http://localhost:3002/user2", dataObj)

        setName("");
        setMobnumber();
        setEmailid("");

        alert("New Visiters");


    }

    useEffect(() => {
        axios.get("http://localhost:3002/user2")
            .then(async (res) => {
                // console.log(res.data);
                const taskData = await res.data;

                console.log(taskData);

                setUserData(taskData);
            }).catch(err => console.log(err));
    }, []);

    console.log(userData);

    return (
        <>
            <div className='footer'>
                <div className='contact'>
                    <h2> CONTACT US</h2>
                    {/* <div className='underline'></div> */}
                    <p className='note'>Please enter the details below to get in touch with us !</p>
                </div>

                <div className='forms'>
                    <form onSubmit={submitHandler}>
                        <div className='inputs'>
                            <div className='one'>
                                <input type={'text'} placeholder='Name' onChange={(e) => setName(e.target.value)} value={Name} ></input>
                            </div>
                            <div className='two'>
                                <input type={'number'} placeholder='Mob Number' onChange={(e) => setMobnumber(e.target.value)} value={Mobnumber}></input>
                            </div>
                            <div className='three'>
                                <input type={'email'} placeholder='Email-id' onChange={(e) => setEmailid(e.target.value)} value={Emailid}></input>
                            </div>
                            <div className='btn'>
                                <button type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>

                    <div className='map'>
                        <h2> LOCATION</h2>
                        <div className='img'>
                            <img src=' http://elysiapune.com/asset/kd.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;