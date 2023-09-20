import React from 'react';
import { useAppContext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';
const UserTableWithAssignRole = () => {
    const { state } = useAppContext();
    const navigate = useNavigate();
    
    return (

        <div className="overflow-x-auto w-full">
           <h2> Role Assign Table </h2>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department Name </th>
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
                                <td>{user.Role}</td>
                                <th>
                                    <button
                                        onClick={() => {
                                            navigate(`/addrole/${user.ID}`);
                                        }}
                                    className="btn btn-ghost btn-xs">Edit</button>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserTableWithAssignRole;