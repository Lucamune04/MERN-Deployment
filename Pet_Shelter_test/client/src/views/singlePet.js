import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link,navigate} from '@reach/router'


export default function SinglePet(props){
    const [shelter,setShelter]=useState(null)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/"+props.id)
        .then(response=>setShelter(response.data));
    },[props.id]);


    const handleDelete=(e)=>{
        axios.delete("http://localhost:8000/api/pets/"+e.target.value)
        .then(()=>navigate('/'))
        .catch(e=>console.log(e))
    }

    if(shelter==null) return "loading...."

    return(
        <div>
        
        <h3>Details About :{shelter.name}</h3>
        <p>Pet Type : {shelter.type}</p>
        <p>Description : {shelter.description}</p>
        <p>Skills:</p>
        <p>{shelter.skill1}</p>
        <p>{shelter.skill2}</p>
        <p>{shelter.skill3}</p>
        <button value ={shelter._id} onClick={handleDelete}>Adopt {shelter.name}</button>
        </div>
    )
}