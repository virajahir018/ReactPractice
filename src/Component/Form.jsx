import React, { useEffect, useState } from 'react'

function Form() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [addr, setAddr] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [user, setUser] = useState([])

    let find = JSON.parse(localStorage.getItem("User")) || [];

    let findUser = find.find((e)=>{
        e.Email === email;
    })

    const isValid = () => {
        if (!email || !pass || !addr || !city || !state || !user || !findUser) return false;

        return true;
    }

    const Store = () => {

        let valid = isValid();

        if (valid) {
            let newUser = {
                Email: email,
                Password: pass,
                Address: addr,
                City: city,
                State: state
            }

            user.push(newUser);

            localStorage.setItem("User", JSON.stringify(user))
            console.log(Email)

        }
    }

    return (
        <div className='form'>
            <h1>{state}</h1>
            <div className='ep'>

                <input type="text" placeholder='Email' onChange={(e) => {
                    setEmail(e.target.value)
                }} />

                <input type="number" placeholder='Password' onChange={(e) => {
                    setPass(e.target.value)
                }} />
            </div>

            <input className='add' type="text" placeholder='Address' onChange={(e) => {
                setAddr(e.target.value)
            }} />

            <div className='cs'>
                <input type="text" placeholder='City' onChange={(e) => {
                    setCity(e.target.value)
                }} />

                <select name="state" onChange={(e) => {
                    setState(e.target.value)

                }}>
                    <option value="All">All</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Rajasthan">Rajasthan</option>
                </select>
            </div>

            <button onClick={Store}>Sign In</button>
        </div>
    )
}

export default Form;