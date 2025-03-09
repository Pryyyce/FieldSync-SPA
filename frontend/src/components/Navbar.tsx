import React from "react"
import { Link } from "react-router-dom"
import './Navbar.css'
type NavBarProps = {
    links: { name: string; path: string }[];
};

const NavBar: React.FC<NavBarProps> = ({ links }) => {
    return (
        <nav className="navbar">
            <ul className ="nav-links">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );};

export default NavBar;

