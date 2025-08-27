import React from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar">
                    <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                    <NavLink to="/example01" activeClassName="active">Example01</NavLink>
                    <NavLink to="/example02" activeClassName="active">Example02</NavLink>
                    <NavLink to="/users" activeClassName="active">Users</NavLink>

                </nav>
            </>
        );
    }
}

export default Navbar;