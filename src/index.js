import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home Page/Home/Home'
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'; // Importing routing-related components from react-router-dom

const router = createBrowserRouter(
  // Creating routes from children components
  createRoutesFromChildren(
    // Defining routes
    <Route path='/' element={<App/>}> {/* Root route */}
      <Route path='' element={<Home/>} /> {/* Home route */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
