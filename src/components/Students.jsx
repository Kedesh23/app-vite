import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ClipLoader } from "react-spinners";
import Button from "./Button";

export default function Students() {
    const url = "http://192.168.1.140:2500/api/eleves";
    const [data, setData] = useState([]); // Initialisation de l'état local avec un tableau vide
    const [loading, setLoading] = useState(false);

    {/*Le useEffect de la progress loading*/}
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, []);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setData(data);
            }).catch((error) => {
                console.log(error);

            })
    }, []);
    console.log(data);
    return (
        <>
            <NavBar />
            {
                 loading ?
                 <ClipLoader color={'#BD2D1B'} loading = {loading} size = {150} /> :
                <main>
                <h1 className="font-bold text-3xl text-center flex flex-col justify-center py-[3em]">Liste des étudiants</h1>
                {/* {data.map((student) => {
                    return <p key={student.id}>{student.nom}</p>
                })} */}

                    <table>
                        <thead>
                            <tr className="">
                                <th>Id</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>City</th>
                                <th>Email</th>
                                <th>Sexe</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.prenom}</td>
                                    <td>{student.nom}</td>
                                    <td>{student.ville}</td>
                                    <td>{student.email}</td>
                                    <td>{student.sexe}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                <Button to="/Login" className="my-[3em] bg-blue-300 px-[2em] py-[.5em] rounded-sm font-bold" title="Creer un etudiant"/>
            </main>
            }
            
            <Footer />
        </>
        
    );
}
