import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Login.css";
import axios from "axios";

export default function Login() {

    const [data, setData] = useState({
        nom: "",
        prenom: "",
        sexe: "",
        ville: "",
        email: "",

    });
    const [classe, setClasse] = useState([]);

    //Recuperation des classes
    useEffect(() => {
        axios.get("https://backend-ecole-241.onrender.com/api/eleves")
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
            .post("https://backend-ecole-241.onrender.com/api/eleves", { data }, {
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
                        <label htmlFor="nom">nom: </label>
                        <input
                            type="text"
                            className="p-[.5em] rounded-md"
                            name="nom"
                            value={data.nom}
                            id="nom"
                            placeholder="John"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">prenom: </label>
                        <input
                            type="text"
                            className="p-[.5em] rounded-md"
                            name="prenom"
                            value={data.prenom}
                            id="prenom"
                            placeholder="Doe"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ville">ville: </label>
                        <input
                            type="text"
                            className="p-[.5em] rounded-md"
                            name="age"
                            value={data.ville}
                            id="ville"
                            placeholder="24"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">email: </label>
                        <input
                            type="email"
                            className="p-[.5em] rounded-md"
                            name="email"
                            value={data.email}
                            id="ville"
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
                    <button type="submit" className="p-[1em] bg-red-400 text-white rounded-md">
                        submit
                    </button>
                </form>
            </div>
            <Footer />
        </main>
    );
}
