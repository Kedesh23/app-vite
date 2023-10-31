import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Login.css";
import axios from "axios";

export default function Login() {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        sexe: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        axios
            .post("https://app-vite.vercel.app/", {data}, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <main>
            <NavBar />
            <div className="flex justify-center items-center my-[3em]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-10 bg-blue-200">
                    <div className="form-group">
                        <label htmlFor="firstname">firstname: </label>
                        <input
                            type="text"
                            className="p-[.5em] rounded-md"
                            name="firstname"
                            value={data.firstname}
                            id="firstname"
                            placeholder="John"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">lastname: </label>
                        <input
                            type="text"
                            className="p-[.5em] rounded-md"
                            name="lastname"
                            value={data.lastname}
                            id="lastname"
                            placeholder="Doe"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">age: </label>
                        <input
                            type="text"
                            className="p-[.5em] rounded-md"
                            name="age"
                            value={data.age}
                            id="age"
                            placeholder="24"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sexe">Sexe</label>
                        <input type="text" id="sexe" name="sexe" value={data.sexe} onChange={handleChange} />
                    </div>
                    <button type="submit" className="p-[1em] bg-red-400 text-white rounded-md">
                        submit
                    </button>
                </form>
            </div>
            <Footer />
        </main>
    );
}
