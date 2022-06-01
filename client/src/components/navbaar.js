import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">CRUD Application using MERN Stack</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink className="navbar-brand mx-4" to="/postfeed">All-Posts</NavLink>
                            {/* <li>
                                <a href='http://localhost:5500/Website/welcome.html'><button className='btn btn-outline-warning'>Log-Out</button></a>
                            </li> */}
                            <NavLink className="navbar-brand mx-4" to="/feed">User-Description</NavLink>
                        </ul>
                        {/* <ul className="navbar-nav me-auto mb-lg-0">
                            <NavLink className="navbar-brand mx-4" to="/feed">User-Description</NavLink>
                        </ul> */}
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar