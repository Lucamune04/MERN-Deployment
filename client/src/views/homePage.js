import React, { useState, useEffect } from 'react';
import axios from "axios"
import {Link}  from '@reach/router'
import Style from "../components/style.module.css"


export default ()=>{
    const [shelters,setShelters]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
        .then(response=>setShelters(response.data))
        .catch(e=>console.log(e))
    },[])


    return(
        <div>
            
            <h3>These pets are looking for a good home</h3>
            <table className={Style.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {shelters.map((shelter,id)=>(
                        <tr key={id}>
                            <th>{shelter.name}</th>
                            <th>{shelter.type}</th>
                            <th><Link to={"/pets/"+ shelter._id}>Details</Link></th> | <th><Link to={"/pets/"+ shelter._id+"/edit"}>Edit</Link></th> 
                        </tr>
                    ))}
                </tbody>
                
            </table>
            <Link to="/pets/new">add a pet to the shelter</Link>
        </div>

    )
}