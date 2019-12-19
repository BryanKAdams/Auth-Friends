import { axiosWithAuth } from "./utils/axiosWithAuth"
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
function Friends(props) {
    const handleLogout = () => {
        localStorage.removeItem("token");
        props.history.push("/");
    };
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => {
                console.log("There was an error", err)
            })
    }, [])
    return (
        <div>
            <h1>Friends</h1>
            {friends.map((item, index) => {
                return <div key={index}>
                    <h1>{item.name}</h1>
                    <h2>{item.age}</h2>
                    <h3>{item.email}</h3>
                </div>
            })}
             <button onClick={handleLogout}>Logout</button>
             <button><Link to="/addfriend">Add Friend</Link></button>
        </div>
            )
        }
        
export default Friends;