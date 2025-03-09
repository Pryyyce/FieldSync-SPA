import React from 'react';
import logo from './logo.svg';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import SavePage from './components/SavePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBarLinks from './data/NavbarLinks';
import {UsersContext,User} from './context/UsersContext';
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

        <Route path="/users/load" element={<div>Load</div>} />

      </Routes>
    </Router>
  );
}

export default App;
