import React from "react"
import { Link } from "react-router-dom"

type NavBarProps = {
    links: { name: string; path: string }[];
};

const NavBar: React.FC<NavBarProps> = ({ links }) => {
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );};

export default NavBar;

