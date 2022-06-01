import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const Home = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const navigate = useNavigate();


    const getdata = async (e) => {

        const res = await fetch("http://localhost:8000/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("Error kindly fill all the entries!");
        }
        else {
            setUserdata(data);
            console.log("Data recieved");
        }
    }


    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {
        const res2 = await fetch(`http://localhost:8000/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        });
        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("Error kindly fill all the entries!");
        }
        else {
            console.log("Data deleted");
            navigate('/');
        }
    }

    var firebaseConfig = {
        apiKey: "AIzaSyBYjQ204RuBhuJFnj0MyAZL6ObfLP0XV1M",
        authDomain: "indian-plagiarism-tool.firebaseapp.com",
        databaseURL: "https://indian-plagiarism-tool-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "indian-plagiarism-tool",
        storageBucket: "indian-plagiarism-tool.appspot.com",
        messagingSenderId: "204343244106",
        appId: "1:204343244106:web:0c11ca4b5de3abd204fdb3"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getDatabase(app);
    console.log(auth);

    // get firebase user data
    const getUserData = async () => {
        const user = await auth.currentUser;
        const userdata = await user.providerData[0];
        console.log(userdata);
        return userdata;
    }


    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2'>
                    <NavLink to="/register" className='btn btn-primary mx-4'>Register User</NavLink>
                    <NavLink to="/post" className='btn btn-primary'>Post Data</NavLink>
                </div>
            </div>
            <div className='container mt-2'>
                <table className="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col">CRUD Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getuserdata.map((element, id) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>{element.work}</td>
                                            <td>{element.mobile}</td>
                                            <td className='d-flex justify-content-between'>
                                                <NavLink to={`view/${element._id}`}><button className='btn btn-success'>Read</button></NavLink>
                                                <NavLink to={`edit/${element._id}`}><button className='btn btn-primary'>Update</button></NavLink>
                                                <button className='btn btn-danger' onClick={() => deleteuser(element._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Home