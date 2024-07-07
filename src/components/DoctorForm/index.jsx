import React, { useEffect, useState } from 'react'
import { addDoctor } from '../../services';

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    experience: '',
    fieldOfExpertise: '',
    description: ''
  });  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addDoctor(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='w-1/3 flex flex-col gap-4'>
      <div className='w-full flex flex-col gap-2'>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          required
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          required
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <label>Experience:</label>
        <input
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          required
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <label>Field of Expertise:</label>
        <input
          type="text"
          name="fieldOfExpertise"
          value={formData.fieldOfExpertise}
          onChange={handleChange}
          className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          required
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          required
        />
      </div>
      <button type="submit" className='p-2 px-4 rounded-md bg-blue-500 active:bg-blue-600'>Submit</button>
    </form>
  );
}

export default DoctorForm