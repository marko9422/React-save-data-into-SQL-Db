import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';

// import components
import Create from './components/Create';
import List from './components/List';
import Edit from './components/Edit';

const App = () => {

return (

  <div className="">
    <h3>React</h3>

  <BrowserRouter>
      <Link to='/'>List users</Link>
      <Link to='user/create'>Create users</Link>
      <Link to='user/:id/edit'>Edit users</Link>


      <Routes>
        <Route index element={<List />} />
        <Route path='user/create' element={<Create />} />
        <Route path='user/:id/edit' element={<Edit />} />
      </Routes>
  </BrowserRouter>


  </div>    

  )}


export default App