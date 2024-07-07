import React, { useEffect, useState } from 'react'
import Table from '../components/Table';
import { getAllDiagnoses, getAllDoctors, getAllPatients, getDiagnosis } from '../services';
import { useNavigate } from 'react-router-dom';
import { getuuid } from '../utils/getuuid';

const patientColumns = [
  { label: 'Id', field: 'id' },
  { label: 'Name', field: 'name' },
  { label: 'Age', field: 'age' },
  { label: 'Blood type', field: 'bloodType' },
  { label: 'Sex', field: 'sex' },
  { label: 'Description', field: 'description' }
];

const doctorColumns = [
  { label: 'Id', field: 'id' },
  { label: 'Name', field: 'name' },
  { label: 'Age', field: 'age' },
  { label: 'Experience', field: 'experience' },
  { label: 'Field of Expertise', field: 'fieldOfExpertise' },
  { label: 'Description', field: 'description' }
];

const diagnosisColumns = [
  { label: 'Patient ID', field: 'patientId' },
  { label: 'Doctor ID', field: 'doctorId' },
  { label: 'Age', field: 'age' },
  { label: 'Sex', field: 'sex' },
  { label: 'Datetime', field: 'datetime' },
  { label: 'Amount', field: 'amount' },
  { label: 'Summary', field: 'summary' }
];

const Home = () => { 
  const tabs = [
    { label: 'Doctor', service: getAllDoctors, columns: doctorColumns },
    { label: 'Patient', service: getAllPatients, columns: patientColumns },
    { label: 'Diagnosis', service: getAllDiagnoses, columns: diagnosisColumns }
  ];

  const [currentTab, setCurrentTab] = useState(0);
  const [tableRows, setTableRows] = useState([]);
  const navigate = useNavigate();

  const handleTabChange = (index) => {
    setCurrentTab(index);
  }

  useEffect(() => {    
    tabs[currentTab].service().then(data => {
      console.log(data);
      const newTableRows = [];

      data.forEach((dataRow) => {
        const newRow = {};
        tabs[currentTab].columns.forEach((column) => newRow[column.field] = dataRow[column.field]);

        for(let key in newRow)
          if(typeof newRow[key] === 'number' || typeof newRow[key] === 'bigint')
            newRow[key] = newRow[key].toString();

        newTableRows.push(newRow);
      })

      setTableRows(newTableRows);
    });
  }, [currentTab]);

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
      <Table columns={tabs[currentTab].columns} rows={tableRows} />
      <button className='p-1 px-3 w-32 active:bg-blue-600 font-bold text-blue-50 rounded-md bg-blue-500' onClick={() => navigate('/form')}>Add</button>
    </div>
  )
}

export default Home