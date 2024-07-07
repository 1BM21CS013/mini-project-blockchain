import React, { useEffect, useState } from 'react';
import contractInstance from './contractConfig';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Form from './pages/Form';

function App() {
  const [name, setName] = useState('Unknown');

  const handleClick = async () => {
    // somehow get data from blockchain contract
    const data = await contractInstance.methods.getName().call();
    setName(data);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;