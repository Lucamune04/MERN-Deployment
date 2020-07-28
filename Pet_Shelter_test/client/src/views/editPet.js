import React, {useState,useEffect} from 'react'
import {navigate,Link} from '@reach/router'
import axios from 'axios'
import Form from "../components/form"

export default function Editpet(props){
    const [pet,setPet]=useState('')
    const[errors,setErrors]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets/'+props.id)
        .then(response=>{
            setPet(response.data)
        })
    },[props.id])


    function handleSubmit(event){
        axios.put('http://localhost:8000/api/pets/'+props.id,event)
        .then(() =>navigate('/'))
        .catch(err=>{
            const errors = err.response.data.errors; 
            const errorArr = []; 
            for (const key in errors) { 
                errorArr.push(errors[key].properties.message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }

    if (pet==='') return "Loading..."

    return(
        <div>
            
            <h1>Edit {pet.name}</h1>
            {errors.map((err, id) => <p key={id}>{err}</p>)}
            <Form pet={pet} onSubmit={handleSubmit} action="Edit Pet"/>

        </div>
    )
}