import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import HomePage from './components/Home/HomePage';
import Login from './components/Auth/Login';
import Signin from './components/Auth/Signin';
import EditProfile from './components/EditProfile/Editprofile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="admins" exact element={<Admin />} />
        <Route path="users" exact element={<User />} />
      </Route>
      <Route path="/login" exact element={<Login />} />
      <Route path="/signin" exact element={<Signin />} />
      <Route path="/editprofile" exact element={<EditProfile />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
