import React from "react"
import { axiosWithAuth } from './utils/axiosWithAuth'
import { useState, useEffect } from "react"
const AddFriend = props => {
    const [item, setItem] = useState({
        name: "",
        age: "",
        email: "",
    });
    useEffect(() => {
        setItem(props.tech)
    }, [props.tech]);
    const submitHandler = event => {
        event.preventDefault();
        axiosWithAuth()
            .post(`http://localhost:5000/api/friends`, item)
            .then(res => { console.log(res); props.history.push("/friends")}
           )
            .catch(err => console.log(err.response))


        console.log(item, "Edit Form submit handler")
    }
    const changeHandler = event => {
        setItem({ ...item, [event.target.name]: event.target.value })
    }

    return (
        <form onSubmit ={submitHandler}>
            Name:<input type="text" name="name" onChange={changeHandler} /> <br />
            Age:<input type="text" name="age" onChange={changeHandler}/> <br />
            Email:<input type="text" name="email" onChange={changeHandler}/> <br/>
            <input type="submit" value="submit" />
        </form>
    )
}

export default AddFriend