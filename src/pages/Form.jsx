import React, { useState } from 'react'
import DoctorForm from '../components/DoctorForm';
import DiagnosisForm from '../components/DiagnosisForm';
import PatientForm from '../components/PatientForm';
import { addDoctor } from '../services';

const Form = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [formData, setFormData] = useState({});

  const handleTabChange = (index) => {
    setCurrentTab(index);
  }

  const tabs = [
    { label: 'Doctor', component: <DoctorForm onFormDataChange={setFormData} /> },
    { label: 'Patient', component: <PatientForm onFormDataChange={setFormData} /> },
    { label: 'Diagnosis', component: <DiagnosisForm onFormDataChange={setFormData} /> }
  ];

  return (
    <div className='w-full p-10 flex flex-col justify-center items-center gap-2'>
      <div>
        <div className='flex gap-2'>
          {tabs.map((tab, index) => (
            <button key={index} onClick={() => handleTabChange(index)} className={`p-1 px-3 active:bg-blue-600 font-bold ${currentTab === index ? 'border-b-2 border-b-blue-600 ' : ''} text-blue-800`}>{tab.label}</button>
          ))}
        </div>
        <hr className="w-full h-[2px] bg-blue-50" />
      </div>
      {tabs[currentTab].component}
    </div>
  )
}

export default Form