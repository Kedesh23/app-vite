import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

export default function Students() {
    const url = "https://app-vite.vercel.app";
    const [data, setData] = useState([]); // Initialisation de l'état local avec un tableau vide

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setData(data.data);
            }).catch((error) => {
                console.log(error);

            })
    }, []);
    console.log(data);
    return (
        <main>
            <NavBar />
            <h1 className="font-bold text-3xl text-center py-[3em]">Liste des étudiants</h1>
            {/* {data.map((student) => {
                return <p key={student.id}>{student.attributes.firstname}</p>
            })} */}
            <table>
                <thead>
                    <tr className="">
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                        <th>Sexe</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student) => (
                        <tr key={student.id}>
                            <td>{student.attributes.firstname}</td>
                            <td>{student.attributes.lastname}</td>
                            <td>{student.attributes.age}</td>
                            <td>{student.attributes.sexe}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <Footer />
        </main>
    );
}
