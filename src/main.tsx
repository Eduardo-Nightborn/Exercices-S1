import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage';
import AddUserPage from './components/AddUserPage';
import App from './components/App/App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "addUser",
        element: <AddUserPage />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router}/>  
  </StrictMode>,
)
