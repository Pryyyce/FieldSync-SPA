import React from 'react';
import logo from './logo.svg';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import SavePage from './components/SavePage';
import FetchPage from './components/FetchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBarLinks from './data/NavbarLinks';
import {UsersContext} from './context/UsersContext';
import User from './Interfaces';
import UsersContextWrapper from './context/UsersContextWrapper';
function App() {

  
  return (
    
    <Router>
      <NavBar links = {NavBarLinks}/>
      <Routes>

        <Route element ={<UsersContextWrapper/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/users/save" element={<SavePage/>} />
        </Route>

        <Route path="/users/load" element={<FetchPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
