import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/Appcontext';

const AssignRole = () => {
    const { state, updateUserData } = useAppContext();
    const { ID } = useParams();
    const [selectedUser, setSelectedUser] = useState({});
    const findSelectedUser = async (id) => {
        const u = await state.user.find(u => u.ID == id); // Use `find` instead of `filter` to get a single user
        setSelectedUser(u || {}); // Use an empty object as a fallback to prevent errors
        console.log(u);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setSelectedUser({ ...selectedUser, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("from oru ", selectedUser);
        // You can handle form submission logic here, e.g., sending data to a server.
        updateUserData(selectedUser);
    };
    const handleRoleChange = (e) => {
        setSelectedUser({ ...selectedUser, Role: e.target.value });
    }
    useEffect(() => {
        console.log(ID);
        findSelectedUser(ID);
    }, [ID])

    return (
        <div>
            <div className="lg:w-4/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Edit User Detail</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="block text-gray-600 font-semibold">ID</label>
                        <input
                            readOnly
                            type="text"
                            name="ID"
                            value={selectedUser.ID}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-600 font-semibold">Name</label>
                        <input
                            readOnly
                            type="text"
                            name="Name"
                            value={selectedUser.Name}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-600 font-semibold">Designation</label>
                        <input
                            readOnly
                            type="text"
                            name="Designation"
                            value={selectedUser.Designation}

                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>



                    <div className="mb-2">
                        <label className="block text-gray-600 font-semibold">Select a role : </label>
                        <select
                            value={selectedUser.Role}
                            onChange={handleRoleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        >
                            <option value="0">No role Assigned</option>
                            <option value="admin">Admin</option>
                            <option value="oru">ORU</option>
                            <option value="rio">RIO</option>
                        </select>
                    </div>


                    <div className="mb-2">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Update Role Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AssignRole;
