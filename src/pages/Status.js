import React from 'react';
import { useAppContext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';
const Status = () => {
    const { state } = useAppContext();
    const navigate = useNavigate();
    
    return (

        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department Name </th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state?.user?.map((user, index) => (
                            <tr key={index}>
                                <td>{user.ID}</td>
                                <td>{user.Name}</td>
                                <td>{user.Designation}</td>
                                <td>{user.DepartmentName}</td>
                                <td>{user.DOB}</td>
                                <td>{user.Email}</td>
                                <td>{user.Mobile}</td>
                                <th>
                                    <button
                                        onClick={() => {
                                            navigate(`/details/${user.ID}`);
                                        }}
                                    className="btn btn-ghost btn-xs">Detals</button>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Status;