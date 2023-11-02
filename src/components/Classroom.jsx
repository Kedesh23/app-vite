import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavBar from './NavBar';
import Button from './Button';

export default function Classroom(){
    const [data, setData] = useState([]);
    const url = "http://192.168.1.140:2500/api/classes";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setData(data);
            }).catch((error) => {
                console.log(error);

            })

    })
    return (
        <main>
            <NavBar/>
            <table>
                <thead>
                    <tr>
                        <th>Classroom</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((classe) => (
                        <tr>
                            <td key={classe.id}>{classe.libelle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button to="/Login" className="my-[3em] bg-blue-300 px-[2em] py-[.5em] rounded-sm font-bold my-[3em]" title="Creer une classe"/>
        </main>
    )
}