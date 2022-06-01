import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [inpval, setInpVal] = useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        add:"",
        desc:""
    })

    const setData = (e) => {
        console.log(e.target.value);
        const {name, value} = e.target;
        setInpVal( (preVal) => {
            return {
                ...preVal,
                [name]:value
            }
        })
    }

    const addinpdata = async(e) => {
        
        e.preventDefault();
        
        const {name, email, age, mobile, work, add, desc} = inpval;
        
        const res = await fetch("http://localhost:8000/register", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                name, email, age, mobile, work, add, desc
            })
        });

        const data = await res.json();
        console.log(data);
        
        if(res.status === 422 || !data){
            alert("Error kindly fill all the entries!");
            console.log("Error kindly fill all the entries!");
        }
        else{
            alert("Data successfully added to the database!");
            console.log("Data successfully added to the database!");
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
                        <input type="email"  name='email' value={inpval.email} onChange={setData} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Age</label>
                        <input type="text" name='age' value={inpval.age} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                    <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register