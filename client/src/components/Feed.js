import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Feed = () => {


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



  return (
    <div className='container'>
      <h2 className='text-center mt-3 mb-4'>Welcome to User Description</h2>
      {
        getuserdata.map((element, id) => {
          return (
            <>
              <div class="card bg-light" style={{ maxWidth: 600 }}>
                <div className='container'>
                  <h6 class="card-title mt-3">About {element.name}:</h6>
                  <p class="card-text">{element.desc}</p>
                  <a className='d-flex justify-content-between'>
                    <a href={`http://localhost:3000/view/${element._id}`}><button className='btn btn-sm btn-success'>Visit {element.name}'s profile</button></a>
                  </a>
                  <br/>
                </div>
              </div>
              <br/>
            </>
          )
        })
      }
    </div>
  )
}

export default Feed