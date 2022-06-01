import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Details = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata)

  const { id } = useParams("");
  console.log(id);

  const navigate = useNavigate();

  const getdata = async () => {

    const res = await fetch(`http://localhost:8000/getuser/${id}`, {
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


  return (
    <div className='container mt-3'>
      <h2 style={{ fontWeight: 400 }}>Welcome to {getuserdata.name}'s profile</h2>
      <Card sx={{ maxWidth: 600 }} className="bg-light">
        <CardContent>
          <div className='row'>
            <div className='add_btn'>
              <NavLink to={`/edit/${getuserdata._id}`}><button className='btn btn-success mx-2'>Update</button></NavLink>
              <button className='btn btn-primary' onClick={() => deleteuser(getuserdata._id)}>Delete</button>
            </div>
            <div className='left_view col-lg-6 col-md-6 col-12' style={{ fontWeight: 400 }}>
              <h3>Name: <span>{getuserdata.name}</span></h3>
              <p>Age: {getuserdata.age}</p>
              <p>Email: <span>{getuserdata.email}</span></p>
              <p>Occupation: <span>{getuserdata.work}</span></p>
            </div>
            <div className='right_view col-lg-6 col-md-6 col-12 mt-5'>
              <p className=''>Mobile: <span>{getuserdata.mobile}</span></p>
              <p>Location: <span>{getuserdata.add}</span></p>
              <p>Description: <span>{getuserdata.desc}</span></p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Details