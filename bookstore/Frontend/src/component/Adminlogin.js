import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import your background image
import backgroundImage from './BookStore.jpg';
import Navbar from './Navebar.js';

const Adminlogin = () => {
    const navigate = useNavigate();
    const [logInStatus, setLogInStatus] = useState("");

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

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            console.log(credentials);
            const response = await fetch('http://localhost:1001/api/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                console.log("got ok");
                const responseData = await response.json();
                const { token } = responseData;
                sessionStorage.setItem('token', token);
                setLogInStatus({ msg: "Success", key: Math.random() });

                console.log('Username:', responseData.username);
                navigate("/admin");
            }
            else {
                setLogInStatus({
                    msg: "Invalid User name or Password",
                    key: Math.random(),
                });
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    return (
        <><Navbar/>
        <div className="text-center p-5" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh' }}>
            <h2 className="text-center">Admin Login</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Enter Admin Name" />
                        </div>
                        <div className="mb-3">
                            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Enter Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default Adminlogin;
