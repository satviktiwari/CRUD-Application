import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata)

    const navigate = useNavigate();

    const [inpval, setInpVal] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
    })

    const setData = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setInpVal((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }



    const { id } = useParams("");
    console.log(id);

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
            setInpVal(data);
            console.log("Data recieved");
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    const updateuser = async(e) => {
        e.preventDefault();
        const { name, email, age, mobile, work, add, desc } = inpval;
        const res2 = await fetch(`http://localhost:8000/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name, email, age, mobile, work, add, desc
            })
        });
        const data2 = await res2.json();
        console.log(data2);
        if(res2.status === 422 || !data2){
            alert("Error: kindly fill all the entries!");
            console.log("Error kindly fill all the entries!");
        }
        else{
            alert("Data successfully updated!");
            console.log("Data successfully updated!");
            navigate("/");
        }
    }



    return (
        <div className='container'>
            <NavLink to="/">Home</NavLink>
            <form className='mt-5'>
                <div className='row'>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setData} name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" name='email' value={inpval.email} onChange={setData} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Age</label>
                        <input type="number" name='age' value={inpval.age} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Mobile</label>
                        <input type="number" name='mobile' value={inpval.mobile} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Work</label>
                        <input type="text" name='work' value={inpval.work} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Address</label>
                        <input type="text" name='add' value={inpval.add} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Description</label>
                        <textarea name='desc' value={inpval.desc} onChange={setData} className='form-control' id='' cols={30} rows={5}></textarea>
                    </div>
                    <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit