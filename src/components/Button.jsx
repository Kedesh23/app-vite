import React from "react";
import { Link } from "react-router-dom";

export default function Button(props){
    return (
        <Link to={props.to} className={props.className}>{props.title}</Link>
    )
}