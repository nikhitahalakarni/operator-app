import { StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  createBrowserRouter,
  RouterProvider,Navigate
} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard.jsx';
import AddOperator from './components/addoperator/AddOperator.jsx';
import Login from "./components/login/Login";
import { OperatorProvider } from './components/createContext/OperatorContext.jsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,   // no sidebar/navbar here
  },
  {
    path: "/",
    element: <App />,   // layout
    children: [
       {
        index: true,
        element: <Navigate to="/login" />   
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "addOperator",
        element: <AddOperator />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  
  <OperatorProvider>
    <RouterProvider router={router} />
  </OperatorProvider>
)
