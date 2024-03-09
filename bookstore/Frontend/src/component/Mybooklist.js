import React, {useEffect, useState} from "react";
import Usernavebar from './Usernavebar.js';
export default function Mybooklist(){
    const [user,setUser] = useState([]);
    const [books,setBooks] = useState([]);
    const [exitStatus,setExitStatus] = useState("");
    let userName;

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const name = token.split("|");
        userName = name[0];
        fetchUserId();
    }, []);

    useEffect(() => {
        if (user.id) {
            fetchBookInfo();
        }
    }, [user]);

    const fetchUserId = async () => {
        try {
            const response = await fetch(`http://localhost:1001/book/getuser/${userName}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                setUser(responseData);
            } else {
                throw new Error("User Not Found");
            }

        } catch (error) {
            console.error('Error during Fetch user:', error.message);
        }
    };
    const fetchBookInfo = async () => {
        try{
            const response = await fetch(`http://localhost:1001/book/books/${user.id}/added`,{
                method : 'GET',
                headers : {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch books');
            }
            const data = await response.json();
            console.log(data);
            setBooks(data);
        }
        catch (error) {
            console.error('Error fetching book:', error);
        }
    }
    const handleRemove = async (bookId,userId) => {
        try{
            const response = await fetch(`http://localhost:1001/book/books/${bookId}/${userId}/delete`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData.data);
               
            } else {
                const errorData = await response.json();
                console.error('Error during Delete or Remove User From Book:', errorData.error);
               
            }


        }
        catch (error) {
            console.error('Error during Delete or Remove User From Queue:', error.message);
        }
    }
    return (
        <><Usernavebar />
            <div className='home-container'>
                <center><h2 style={{fontSize: "32px"}}>My Books</h2>
                </center>
                <center>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        padding: "20px"
                    }}>
                        <table style={{width: "80vw", borderCollapse: "collapse", textAlign: "center"}}>
                            <thead>
                            <tr style={{backgroundColor: "black", color: "white"}}>
                                <th style={{padding: "12px 15px",width:"30px",height:"20px", fontSize: "20px"}}>Genre</th>
                                <th style={{padding: "12px 15px",width:"30px",height:"20px", fontSize: "20px"}}>Isbn</th>
                                <th style={{padding: "12px 15px",width:"30px",height:"20px", fontSize: "20px"}}>Price</th>
                                <th style={{padding: "12px 15px",width:"30px",height:"20px", fontSize: "20px"}}>Title</th>
                                <th style={{padding: "12px 15px",width:"30px",height:"20px", fontSize: "20px"}}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books.map(book => (
                                <tr key={book.id}  className="separator">
                                    <td>{book.genre}</td>
                                    <td>{book.isbn}</td>
                                    <td>{book.price}</td>
                                    <td>{book.title}</td>
                                    <td>
                                        <button onClick={() => handleRemove(book.id, user.id)} style={{backgroundColor:"black",border:"none",color:"white",padding:"10px",paddingLeft:"25px",paddingRight:"25px",borderRadius:"10px"}}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </center>
            </div>
            
        </>
    )
        ;
}