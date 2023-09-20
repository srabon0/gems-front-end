import React, { useState } from 'react';
import { useAppContext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';

const ORU = () => {
    const { state, updateUserData, logoutUser } = useAppContext();
    const navigate = useNavigate();
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
        endTime: '',
        WorkActivitiesLastYear: '',
        Good: false,
        Mark: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({ ...employeeData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, e.g., sending data to a server.
        console.log("from oru ", employeeData);
        const newData = employeeData;
        newData['Submitted_to_rio'] = 1
        console.log(newData);
        updateUserData(newData);
        resetForm();
        e.target.name.ID = "";
    };


    const resetForm = () => {
        setEmployeeData({
            ID: '',
            Name: '',
            Designation: '',
            DepartmentName: '',
            Role: '',
            DOB: '',
            Email: '',
            Mobile: '',
            startTime: '',
            endTime: '',
            WorkActivitiesLastYear: '',
            Good: false,
            Mark: '',
        })
    }

    const findUserOnBlur = (e) => {
        console.log("from findUserOnBlur ", e.target.value);
        const foundUser = state.user.find(u => u.ID == e.target.value)
        if (foundUser) {
            setEmployeeData(foundUser)
        } else {
            alert("not found")
            resetForm();
        }

    }

    return (
        <div className="lg:w-4/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">

            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">ORU</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold">ID</label>
                    <input
                        type="text"
                        name="ID"
                        onBlur={findUserOnBlur}
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
                        Submit to RIO
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ORU;
