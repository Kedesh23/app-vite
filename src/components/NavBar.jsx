import react from "react";
import { NavLink } from "react-router-dom";
import Students from "./Students";
import Login from "./Login";
import Classroom from "./Classroom";

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

                <NavLink to='/classroom'>
                    <li>classroom</li>
                </NavLink>

                <NavLink to='/classe'>
                    <li>classe</li>
                </NavLink>
            </ul>
        </nav>
    )
}