import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

const List = () => {

    const [users, setUsers] = useState([]) 

    useEffect(() =>{
        getUsers()
    },[])

    function getUsers(){
        axios.get('http://localhost/API/users/').then(function(response){
            console.log(response.data)
            setUsers(response.data)
        })
    }

    return (
        <div>
            <h1>List users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.surename}</td>
                            <td>{user.created_at}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}

export default List
