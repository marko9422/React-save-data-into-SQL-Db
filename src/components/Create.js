import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Create.css';

const Create = () => {
    
    const navigate = useNavigate()
    const [inputs, setInputs] = useState([])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value }))
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        axios.post("http://localhost/API/index.php", inputs).then(function(response){
            console.log(response.data)
            navigate('/')
        });
    }



    return (
        <div>
            <h1>Create users</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name='name' onChange={handleChange} />
                <br/>

                <label>Surename:</label>
                <input type="text" name='surename' onChange={handleChange} />
                <br/>

                <label>Mobile:</label>
                <input type="text" name='phone' onChange={handleChange} />
                <br/>

                <button>Save</button>
            </form>

        </div>
    )
}

export default Create

