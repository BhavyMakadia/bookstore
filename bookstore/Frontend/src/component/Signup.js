import React, { useState } from 'react';
import { TextField } from '@material-ui/core'; // Import TextField component
import { useNavigate } from 'react-router-dom';
import Navbar from './Navebar.js';
const Signup = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("sending server with: ", user);

        try {
            // Make a POST request to the signup endpoint
            const response = await fetch('http://localhost:1001/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData.data);
                navigate("/signin");
            } else {
                console.log("User not Added");
                const errorData = await response.json();
                console.error('Error during signup:', errorData.error);
            }

        } catch (error) {
            console.error('Error during signup:', error.message);
        }
    };

    return (
        <><Navbar/>
        <div className="container my-5 p-5" style={{ border: '1px solid black' }} >
           
                <h2 className="text-center">Sign Up</h2>
           
                   <form className=" text-center " onSubmit={handleSubmit}>
                        <div className="text-center" >
                            <TextField   type="text" name="username" value={user.username} onChange={handleChange} label="Enter Username" />
                        </div>
                        <div  className="text-center">
                            <TextField type="text" name="email" value={user.email} onChange={handleChange} label="Enter Email" />
                        </div>
                        <div  className="text-center">
                            <TextField type="password" name="password" value={user.password} onChange={handleChange} label="Enter Password" />
                        </div>
                        <div className='my-4'>
                        <button type="submit" className=" btn btn-primary">Sign Up</button>
                        </div>
                    </form>
               
        </div></>
    );
};

export default Signup;
