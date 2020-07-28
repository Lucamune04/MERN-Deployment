import React, {useState} from 'react';

import Form from "../components/form"
import axios from 'axios'
import { navigate } from '@reach/router';


export default (props)=>{
    
    const [errors,setErrors]=useState([])
    const handleSubmit=(event)=>{
        axios.post("http://localhost:8000/api/pets/",{
            name:event.name,
            type:event.type,
            description:event.description,
            skill1:event.skill1,
            skill2:event.skill2,
            skill3:event.skill3
    })
    .then(()=>navigate("/processing"))
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
    return (
    <div>
    <h3>Know a pet needing a home?</h3>
    {errors.map((err, id) => <p key={id}>{err}</p>)} 
    <Form 
        onSubmit={handleSubmit}
        action="Add Pet">
    </Form>
    
    
    </div>

    )
}