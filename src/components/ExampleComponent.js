// ExampleComponent.js
import React from 'react';
import { useAppContext } from '../context/Appcontext';

function ExampleComponent() {
    const { state, updateUser, toggleTheme } = useAppContext();

    return (
        <div>
            <h1>Welcome, {state.user || 'Guest'}</h1>
            <button onClick={() => updateUser('John')}>Set User</button>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ExampleComponent;
