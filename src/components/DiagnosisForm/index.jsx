import React, { useEffect, useState } from 'react'
import { addDiagnosis } from '../../services';

const DiagnosisForm = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    doctorId: '',
    age: '',
    sex: '',
    datetime: '',
    amount: '',
    summary: ''
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
    formData.datetime = new Date(formData.datetime).getTime();
    addDiagnosis(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='w-1/3 flex flex-col gap-4'>
      <div className='w-full flex flex-col gap-2'>
        <label>Patient ID:</label>
        <input          
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          required
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <label>Doctor ID:</label>
        <input          
          name="doctorId"
          value={formData.doctorId}
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
        <label>Sex:</label>
        <input
          type="text"
          name="sex"
          value={formData.sex}
          onChange={handleChange}
          className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          required
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <label>Date and Time:</label>
        <input
          type="datetime-local"
          name="datetime"
          value={formData.datetime}
          onChange={handleChange}
          className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          required
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          required
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <label>Summary:</label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          required
        />
      </div>
      <button type="submit" className='p-2 px-4 rounded-md bg-blue-500 active:bg-blue-600'>Submit</button>
    </form>
  )
}

export default DiagnosisForm