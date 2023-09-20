import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/Appcontext';

const User = () => {
    const { state,updateUserData } = useAppContext();
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
                    <div className = "mb-2">
                        <label className="block text-gray-600 font-semibold">ID</label>
                        <input
                            type="text"
                            name="ID"
                            value={selectedUser.ID}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className = "mb-2">
                        <label className="block text-gray-600 font-semibold">Name</label>
                        <input
                            type="text"
                            name="Name"
                            value={selectedUser.Name}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className = "mb-2">
                        <label className="block text-gray-600 font-semibold">Designation</label>
                        <input
                            type="text"
                            name="Designation"
                            value={selectedUser.Designation}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className = "mb-2">
                        <label className="block text-gray-600 font-semibold">Department Name</label>
                        <input
                            type="text"
                            name="DepartmentName"
                            value={selectedUser.DepartmentName}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className = "mb-2">
                        <label className="block text-gray-600 font-semibold">DOB</label>
                        <input
                            type="date"
                            name="DOB"
                            value={selectedUser.DOB}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className = "mb-2">
                        <label className="block text-gray-600 font-semibold">E-mail</label>
                        <input
                            type="email"
                            name="Email"
                            value={selectedUser.Email}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className = "mb-2">
                        <label className="block text-gray-600 font-semibold">Mobile</label>
                        <input
                            type="tel"
                            name="Mobile"
                            value={selectedUser.Mobile}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                   <div className='flex justify-between items-center'>
                   <div className = "mb-2 w-2/4">
                        <label className="block text-gray-600 font-semibold">From :</label>
                        <input
                            type="date"
                            name="startTime"
                            value={selectedUser.startTime}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className = "mb-2 w-2/4">
                        <label className="block text-gray-600 font-semibold">To :</label>
                        <input
                            type="date"
                            name="endTime"
                            value={selectedUser.endTime}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                   </div>
                    <div className = "mb-2">
                        <label className="block text-gray-600 font-semibold">Activities that your work last year</label>
                        <textarea
                            name="WorkActivitiesLastYear"
                            value={selectedUser.WorkActivitiesLastYear}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    {
                        state.currentUser?.Role !== '0' && <>
                            <div className = "mb-2">
                                <label className="block text-gray-600 font-semibold">Marks</label>
                                <input
                                    type="text"
                                    name="Marks"
                                    value={selectedUser.Marks}
                                    onChange={handleChange}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className = "mb-2">
                                <label className="block text-gray-600 font-semibold">Good</label>
                                <input
                                    type="radio"
                                    name="Good"
                                    className="radio"
                                    value="1"
                                    onChange={handleChange}
                                    checked={selectedUser.Good == '1'}
                                /> <span className='mx-2'>Yes</span>
                                <input
                                    type="radio"
                                    name="Good"
                                    className="radio"
                                    value="0"
                                    onChange={handleChange}
                                    checked={selectedUser.Good == '0'}

                                /> <span className="mx-2">No</span>
                            </div>

                        </>
                    }
                    <div className = "mb-2">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Update User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default User;
