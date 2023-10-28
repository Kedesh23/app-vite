import react from "react";
import { NavLink } from "react-router-dom";
import Students from "./Students";
import Login from "./Login";

export default function NavBar() {
    return (
        <nav className="p-[2em] shadow-md">
            <ul className="flex justify-between font-bold">
                <NavLink to="/">
                    <li> home</li>
                </NavLink>

                <NavLink to='/students'>
                    <li>students</li>
                </NavLink>

                <NavLink to='/login'>
                    <li>login</li>
                </NavLink>
            </ul>
        </nav>
    )
}