import contractInstance from "../contractConfig"
import web3 from "../geth";
import { getuuid } from "../utils/getuuid";

const addPatient = async ({ name, age, bloodType, sex, description }) => {
  const patientId = getuuid();
  try {
    // Request account access if needed
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Get the list of accounts
    const accounts = await web3.eth.getAccounts();
    const defaultAccount = accounts[0];

    // Call the addPatient function
    const tx = await contractInstance.methods.addPatient(patientId, name, age, bloodType, sex, description)
      .send({ from: defaultAccount, gas: '500000', gasPrice: '1000000000' });

    console.log('Transaction successful:', tx);
    return { success: true, message: 'Patient added successfully' };
  } catch (error) {
    console.error('Error adding patient:', error);
    return { success: false, message: 'Error adding patient' };
  }
}
const addDoctor = async ({ name, age, experience, fieldOfExpertise, description }) => {
  const doctorId = getuuid();
  try {
    // Request account access if needed
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Get the list of accounts
    const accounts = await web3.eth.getAccounts();
    const defaultAccount = accounts[0];

    // Call the addDoctor function
    const tx = await contractInstance.methods.addDoctor(doctorId, name, age, experience, fieldOfExpertise, description)
      .send({ from: defaultAccount, gas: '500000', gasPrice: '1000000000' });

    console.log('Transaction successful:', tx);
    return { success: true, message: 'Doctor added successfully' };
  } catch (error) {
    console.error('Error adding Doctor:', error);
    return { success: false, message: 'Error adding Doctor' };
  }
}
const addDiagnosis = async ({ patientId, doctorId, age, sex, datetime, amount, summary }) => {
  try {
    // Request account access if needed
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Get the list of accounts
    const accounts = await web3.eth.getAccounts();
    const defaultAccount = accounts[0];

    // Call the addDiagnosis function
    const tx = await contractInstance.methods.addDiagnosis(patientId, doctorId, age, sex, datetime, amount, summary)
      .send({ from: defaultAccount, gas: '500000', gasPrice: '1000000000' });

    console.log('Transaction successful:', tx);
    return { success: true, message: 'Diagnosis added successfully' };
  } catch (error) {
    console.error('Error adding Diagnosis:', error);
    return { success: false, message: 'Error adding Diagnosis' };
  }
}
const removeDiagnosis = async (data) => {
  console.log("Inside services", data);
}
const getDiagnosis = async () => {
}
const getAllDiagnoses = async () => {
  try {
    // Call the getAllPatients function on the smart contract
    const diagnoses = await contractInstance.methods.getAllDiagnosisRecords().call();
    diagnoses.forEach((diagnosis) => {
      diagnosis.datetime = new Date(parseInt(diagnosis.datetime)).toLocaleString();
    });
    // Process the returned patient data
    console.log('All diagnoses:', diagnoses);
    return diagnoses;
  } catch (error) {
    console.error('Error fetching diagnoses:', error);
    return [];
  }
}
const getAllPatients = async () => {
  try {
    // Call the getAllPatients function on the smart contract
    const patients = await contractInstance.methods.getAllPatients().call();

    // Process the returned patient data
    console.log('All Patients:', patients);
    return patients;
  } catch (error) {
    console.error('Error fetching patients:', error);
    return [];
  }
}
const getAllDoctors = async () => {
  try {
    // Call the getAllDoctors function on the smart contract
    const doctors = await contractInstance.methods.getAllDoctors().call();

    // Process the returned doctor data
    console.log('All Doctors:', doctors);
    return doctors;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return [];
  }
}

export {
  addPatient,
  addDoctor,
  addDiagnosis,
  removeDiagnosis,
  getDiagnosis,
  getAllDoctors,
  getAllPatients,
  getAllDiagnoses
}; 