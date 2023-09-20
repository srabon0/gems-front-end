import React, { useState } from 'react';
import { useAppContext } from '../context/Appcontext';

const AddUserAdmin = () => {
    const {addUser} = useAppContext();

    const [employeeData, setEmployeeData] = useState({
        ID: '',
        Name: '',
        Designation: '',
        DepartmentName: '',
        Role: '',
        DOB: '',
        Email: '',
        Mobile: '',
        startTime: '',
        endTime:'',
        WorkActivitiesLastYear: '',
        Good: false,
        Mark: '',
    });

    const resetForm = ()=>{
        setEmployeeData({
            ID: '',
            Name: '',
            Designation: '',
            DepartmentName: '',
            Role: '',
            DOB: '',
            Email: '',
            Mobile: '',
            WorkingTimeLastYear: '',
            WorkActivitiesLastYear: '',
            Good: false,
            Mark: '',
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({ ...employeeData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("from AddUserAdmin ", employeeData);
        addUser(employeeData);

        resetForm();
        // You can handle form submission logic here, e.g., sending data to a server.
    };

    return (
        <div className="lg:w-4/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold">ID</label>
                    <input
                        type="number"
                        name="ID"
                        value={employeeData.ID}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold">Name</label>
                    <input
                        type="text"
                        name="Name"
                        value={employeeData.Name}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold">Designation</label>
                    <input
                        type="text"
                        name="Designation"
                        value={employeeData.Designation}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold">Department Name</label>
                    <input
                        type="text"
                        name="DepartmentName"
                        value={employeeData.DepartmentName}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold">DOB</label>
                    <input
                        type="date"
                        name="DOB"
                        value={employeeData.DOB}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold">E-mail</label>
                    <input
                        type="email"
                        name="Email"
                        value={employeeData.Email}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold">Mobile</label>
                    <input
                        type="tel"
                        name="Mobile"
                        value={employeeData.Mobile}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold">Period of working time in last year</label>
                    <input
                        type="date"
                        name="startTime"
                        value={employeeData.startTime}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold">Period of working time in last year</label>
                    <input
                        type="date"
                        name="endTime"
                        value={employeeData.endTime}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold">Activities that your work last year</label>
                    <textarea
                        name="WorkActivitiesLastYear"
                        value={employeeData.WorkActivitiesLastYear}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Add User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddUserAdmin;
