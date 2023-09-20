// AppContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context object
const AppContext = createContext();

// Create a context provider component
export function AppProvider({ children }) {
  const [state, setState] = useState({
    // Initial state goes here

    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    user: [
      {
        ID: 101,
        password: 1234,
        Name: "John Doe (Admin)",
        Designation: "Software Engineer",
        Role: 'admin',
        DepartmentName: "Engineering",
        DOB: "1990-05-15",
        Email: "john@example.com",
        Mobile: "123-456-7890",
        startTime:'2020-01-01',
        endTime: '2021-01-01',
        WorkActivitiesLastYear: "Developed new features for the company's software.",
        Good: '',
        Marks: '',
        Submitted_to_rio: 0,
        Submitted_to_cso: 0,
        final_submit: 0,
      },
      {
        ID: 202,
        password: 1234,
        Name: "Maria Smith (ORU)",
        Designation: "Product Manager",
        Role: 'oru',
        DepartmentName: "Product Management",
        DOB: "1985-09-21",
        Email: "alice@example.com",
        Mobile: "987-654-3210",
        startTime:'2020-01-01',
        endTime: '2021-01-01',
        WorkActivitiesLastYear: "Managed product roadmap and user feedback.",
        Good: '',
        Mark: '',
        Submitted_to_rio: 0,
        Submitted_to_cso: 0,
        final_submit: 1,
      },
      {
        ID: 303,
        password: 1234,
        Name: "Kamal Pasha (RIO)",
        Designation: "Product Manager",
        Role: '0',
        DepartmentName: "Product Management",
        DOB: "1985-09-21",
        Email: "alice@example.com",
        Mobile: "987-654-3210",
        startTime:'2020-01-01',
        endTime: '2021-01-01',
        WorkActivitiesLastYear: "Managed product roadmap and user feedback.",
        Good: '',
        Mark: '',
        Submitted_to_rio: 0,
        Submitted_to_cso: 0,
        final_submit: 0,
      },
      {
        ID: 404,
        password: 1234,
        Name: "Walter White (CSO)",
        Designation: "Product Manager",
        Role: '0',
        DepartmentName: "Product Management",
        DOB: "1985-09-21",
        Email: "alice@example.com",
        Mobile: "987-654-3210",
        startTime:'2020-01-01',
        endTime: '2021-01-01',
        WorkActivitiesLastYear: "Managed product roadmap and user feedback.",
        Good: '',
        Mark: '',
        Submitted_to_rio: 0,
        Submitted_to_cso: 0,
        Final_submit: 0,
      },
      {
        ID: 505,
        password: 1234,
        Name: "Dummy User",
        Designation: "Product Manager",
        Role: '0',
        DepartmentName: "Product Management",
        DOB: "1985-09-21",
        Email: "alice@example.com",
        Mobile: "987-654-3210",
        startTime:'2020-01-01',
        endTime:'2021-01-01',
        WorkActivitiesLastYear: "Managed product roadmap and user feedback.",
        Good: '',
        Mark: '',
        Submitted_to_rio: 0,
        Submitted_to_cso: 0,
        final_submit: 0,
      },
      // Add more user objects as needed
    ],
  });

  // Define functions to update the state
  const updateUser = (newUser) => {
    setState({ ...state, user: newUser });
  };

  const getUserById = (id) => {
    return state.user.find((user) => user.ID === id);
  };

  const setCurrentUser = (user) => {
    state.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  const logoutUser = () => {
    state.currentUser = null;
    localStorage.removeItem('currentUser');
  
  }

  const addUser = (user) => {
    const isIdExist = state.user.find((us) => us.ID == user.ID);
    if (isIdExist) {
      alert('User ID already exist');
    } else {
      state.user.push(user);
      updateUser(state.user);
      alert('User added successfully');
    }
  }

  const updateUserData = (user) => {
    const index = state.user.findIndex((us) => us.ID == user.ID);
    if (index !== -1) {
      state.user[index] = user;
      updateUser(state.user);
      alert('User updated successfully');
    }
  }


  return (
    <AppContext.Provider
      value={{
        state,
        updateUser,
        getUserById,
        setCurrentUser,
        addUser,
        updateUserData,
        logoutUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to access the context
export function useAppContext() {
  return useContext(AppContext);
}
