import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import Navbar from './Navebar.js';

const Signin = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         console.log(credentials);
    //         const response = await fetch('http://localhost:1001/api/users/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(credentials),
    //         });

    //         if (response.ok) {
    //             console.log("got ok");
    //             const responseData = await response.json();
               
    //             const { token } = responseData;
    //             sessionStorage.setItem('token', token);
    //             console.log(responseData);
    //             navigate("/showpage");
    //         } else {
    //             console.log("Invalid User name or Password");
    //         }
    //     } catch (error) {
    //         console.error('Error during login:', error.message);
    //     }
    // };
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            console.log(credentials);
            const response = await fetch('http://localhost:1001/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
    
            if (response.ok) {
                console.log("Login successful");
                const responseData = await response.json();
                const { token } = responseData;
                sessionStorage.setItem('token', token);
                console.log(responseData);
                navigate("/mybooklist");
            } else {
                console.log("Invalid username or password");
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };
    
    return (
        <><Navbar/>
        <center>
            <div className="container my-5 p-5" style={{ border: '1px solid black' }}>
            <h4 className="text-center">SignIn</h4>
   
                <div style={{ display: "flex", flexDirection: "column" }}>
                    Username
                    <TextField type="text" name="username" value={credentials.username} onChange={handleChange} label="Enter UserName" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    Password
                    <TextField type="password" name="password" value={credentials.password} onChange={handleChange} label="Enter password" />
                </div>
                <button onClick={handleLogin} style={{ width: "15vw", marginTop: "2vh" }}>Login</button>
                <div style={{ marginTop: "10px" }}>Don't have an account?
                    <button onClick={() => { navigate("/signup") }}>Sign Up</button>
                </div>
            </div>
        </center></>
    );
};

export default Signin;
