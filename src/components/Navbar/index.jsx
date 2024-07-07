import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-slate-900 p-4 flex justify-between items-center w-full px-10'>
      <h1 className='text-white font-bold' onClick={() => navigate('/')}>EHR-Chain</h1>
      <div className="flex gap-2">
        <button onClick={() => navigate('/')} className='rounded-md hover:bg-slate-800 p-2 text-white font-bold'>Home</button>
        <button onClick={() => navigate('/form')} className='rounded-md hover:bg-slate-800 p-2 text-white font-bold'>Form</button>
      </div>
    </div>
  )
}

export default Navbar