import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavBar from './NavBar';
import Button from './Button';

export default function Classroom(){
    const [data, setData] = useState([]);
    const url = "https://backend-ecole-241.onrender.com/api/classes";
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
            <table className='my-[3em]'>
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
            <Button to="/Login" className="my-[3em] mx-auto bg-blue-300 border-[3px] border-black px-[2em] py-[.5em] rounded-sm font-bold my-[3em]" title="Creer une classe"/>
        </main>
    )
}