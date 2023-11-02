import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Login.css";
import axios from "axios";

export default function Login() {

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        sexe: "",
        classroom: ""
    });
    const [classe, setClasse] = useState([]);

    //Recuperation des classes
    useEffect(() => {
        axios.get("http://localhost:1337/api/classrooms")
            .then(res => {
                console.log(res.data)
                setClasse(res.data.data)
            })
            .catch(error => console.log(error));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        axios
            .post("http://localhost:1337/api/students", { data }, {
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
                    <div className="flex gap-5 justify-center">
                        <div>
                            <input type="radio" id="man" name="sexe" value="M" onChange={handleChange} />
                            <label htmlFor="man">man</label>
                        </div>
                        <div>
                            <input type="radio" id="woman" name="sexe" value="F" onChange={handleChange} />
                            <label htmlFor="woman">woman</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="class">Classroom</label>
                        <select name="classroom" id="class" onChange={handleChange}>
                            {classe.map((school) =>(
                                <option key={school.id}>{school.attributes.name_classroom}</option>
                            ))}
                        </select>

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
