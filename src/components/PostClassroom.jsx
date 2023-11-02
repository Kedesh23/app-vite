import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';


export default function PostClassroom() {
    const [data, setData] = useState({
        classe: ""
})
    const url = "http://192.168.1.140:2500/api/classes";

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post(url, {data}, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                console.log(data);
            })
            .catch((eror) => {
                console.log(error)
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    return (
        <>
            <NavBar/>
            <main>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="room">Classe</label>
                    <input type="text" placeholder="creer une classe" name="classe" id="room" onChange={handleChange}></input>
                    <button type="submit" className="p-[1em] bg-red-400 text-white rounded-md">submit</button>
                </form>
            </main>
        </>
        
    )
}


