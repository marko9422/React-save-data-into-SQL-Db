import React from 'react';
import './Edit.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/API/user/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost/API/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }



    return (
        <div>
            <h1>Edit users</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input value={inputs.name} type="text" name='name' onChange={handleChange} />
                <br/>

                <label>Surename:</label>
                <input value={inputs.surename} type="text" name='surename' onChange={handleChange} />
                <br/>

                <label>Mobile:</label>
                <input value={inputs.phone} type="text" name='phone' onChange={handleChange} />
                <br/>

                <button>Save</button>
            </form>

        </div>
    )
}

export default Edit
