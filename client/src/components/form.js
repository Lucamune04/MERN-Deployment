import React, {useState} from "react"
import Style from "../components/style.module.css"


export default (props)=>{
    const [name,setName]=useState(props.pet?.name || '')
    const[type,setType]=useState(props.pet?.type || '')
    const [description,setDescription]=useState(props.pet?.description || '')
    const [skill1,setSkill1]=useState(props.pet?.skill1 || '')
    const [skill2,setSkill2]=useState(props.pet?.skill2 || '')
    const [skill3,setSkill3]=useState(props.pet?.skill3 || '')


    const handleSubmit=(e)=>{
        e.preventDefault();

        props.onSubmit({
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <th>Pet Name:</th>
                    </tr>
                    <tr>
                        <th><input type="text" onChange={e=>setName(e.target.value)} value={name}/></th>
                    </tr>
                    <tr>
                        <th>Pet Type:</th>
                    </tr>
                    <tr>
                        <th><input type="text" onChange={e=>setType(e.target.value)} value={type}/></th>
                    </tr>
                    <tr>
                        <th>Pet Description:</th>
                    </tr>
                    <tr>
                        <th><input type="text" onChange={e=>setDescription(e.target.value)} value={description}/></th>
                    </tr>
                    <tr>
                        <th>Skills (optional):</th>
                    </tr>
                    <tr>
                        <th>Skill 1:</th>
                    </tr>
                    <tr>
                        <th><input type="text" onChange={e=>setSkill1(e.target.value)} value={skill1}/></th>
                    </tr>
                    <tr>
                        <th>Skill 2:</th>
                    </tr>
                    <tr>
                        <th><input type="text" onChange={e=>setSkill2(e.target.value)} value={skill2}/></th>
                    </tr>
                    <tr>
                        <th>Skill 3:</th>
                    </tr>
                    <tr>
                        <th><input type="text" onChange={e=>setSkill3(e.target.value)} value={skill3}/></th>
                    </tr>
                </tbody>
            </table>
    <button className={Style.btn} onClick={handleSubmit}>{props.action}</button>
        </form>
        
    )
}
