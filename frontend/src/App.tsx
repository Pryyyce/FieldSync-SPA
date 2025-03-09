import React from 'react';
import logo from './logo.svg';
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import SavePage from './pages/SavePage';
import FetchPage from './pages/FetchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBarLinks from './data/NavbarLinks';
import {UsersContext} from './context/UsersContext';
import User from './data/Interfaces';
import UsersContextWrapper from './context/UsersContextWrapper';
function App() {

  
  return (
    
    <Router>
      
      <Routes>

        <Route element ={<UsersContextWrapper/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/users/save" element={<SavePage/>} />
        </Route>

        <Route path="/users/load" element={<FetchPage/>} />

      </Routes>
      <NavBar links = {NavBarLinks}/>
    </Router>
  );
}

export default App;
