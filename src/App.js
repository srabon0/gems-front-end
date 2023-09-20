
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import { AppProvider } from './context/Appcontext';



function App() {
  return (
    <>
    <AppProvider>
     <RouterProvider router={routes} />
     </AppProvider>
    </>
  );
}

export default App;
