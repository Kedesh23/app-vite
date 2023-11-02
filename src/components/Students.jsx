import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ClipLoader } from "react-spinners";

export default function Students() {
    const url = "http://localhost:1337/api/students?populate=*";
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
                setData(data.data);
            }).catch((error) => {
                console.log(error);

            })
    }, []);
    console.log(data);
    return (
        <main>
            <NavBar />
            <h1 className="font-bold text-3xl text-center flex flex-col justify-center py-[3em]">Liste des étudiants</h1>
            {/* {data.map((student) => {
                return <p key={student.id}>{student.attributes.firstname}</p>
            })} */}
            {
                loading ?
                    <ClipLoader color={'#BD2D1B'} loading = {loading} size = {150} /> :
                <table>
                    <thead>
                        <tr className="">
                            <th>Id</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Classroom</th>
                            <th>Age</th>
                            <th>Sexe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({id, attributes}) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{attributes.firstname}</td>
                                <td>{attributes.lastname}</td>
                                <td>{attributes.classrooms.data[0].attributes.name_classroom}</td>
                                <td>{attributes.age}</td>
                                <td>{attributes.sexe}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
            
            <Footer />
        </main>
    );
}
