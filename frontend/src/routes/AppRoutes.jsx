import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Trilha from "../pages/Trilha"
import Dashboard from "../pages/Dashboard";
import Mentores from "../pages/Mentores";
import HomePage from "../pages/HomePage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },

            {
                path: 'homepage', 
                element: <HomePage/>
            },

            {
                path: 'trilha', 
                element: <Trilha/>
            },

            {
                path: 'dashboard', 
                element: <Dashboard/>
            },
            
            {
                path: 'mentores', 
                element: <Mentores/>
            }
        ]
    }

])