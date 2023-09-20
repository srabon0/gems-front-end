import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAppContext } from '../context/Appcontext';

const Home = () => {
    const { state,logoutUser } = useAppContext();
    const navigate = useNavigate();

    const logoutFrom = () => {
        logoutUser();
        navigate("/login")
    }
    useEffect(() => {
        if (!state.currentUser) {
            navigate("/login")
        }
    }, [])
    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-6">
                <Navbar />
                {/* Page content here */}
                <Outlet />


            </div>
            <div className="drawer-side">
               
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                    {/* Sidebar content here */}
                    {/* for ORU  */}
                    {(state.currentUser?.Role == "oru") && <li>
                        <NavLink to="/oru">
                            ORU
                        </NavLink>
                    </li>}
                    {(state.currentUser?.Role == "rio") && <li>
                        <NavLink to="/rio">
                            RIO
                        </NavLink>
                    </li>}
                    {(state.currentUser?.Role == "cso") && <li>
                        <NavLink to="/cso">
                            CSO
                        </NavLink>
                    </li>}

                    {/* for admin  */}
                    {(state.currentUser?.Role == "admin") &&<>
                    <li>
                        <NavLink to="/">
                            All User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adduser">
                            Add User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/addrole">
                            Assign Role
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/status">
                            Status Report
                        </NavLink>
                    </li>
                    
                    </> }

                    <button onClick={logoutFrom} className="btn btn-active btn-neutral btn-sm mt-4">Logout</button>

                </ul>
                
            </div>
            
        </div>
    );
};

export default Home;