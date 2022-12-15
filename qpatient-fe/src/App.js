import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import VinNavbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Launch from './components/Launch';
import OnboardClinic from './components/onboarding/OnboardClinic';
import { Card } from 'react-bootstrap';
import OnboardPatient from './components/onboarding/OnboardPatient';
import OnboardDoctor from './components/onboarding/OnboardDoctor';
import OnboardReceptionist from './components/onboarding/OnboardReceptionist';
import OnboardClinicAdmin from './components/onboarding/OnboardClinicAdmin';
import ClinicsList from './components/views/ClinicsList';
import DoctorListClinicWise from './components/views/DoctorListClinicWise';
import DoctorsList  from './components/views/DoctorsList';
import DoctorsPatientList  from './components/views/DoctorsPatientList';
import PatientPatientList  from './components/views/PatientPatientList';

function App() {
  return (
    <div className="container">
      <VinNavbar/>
      <br/>
              <div className="container">
                <BrowserRouter>
                <Routes>
                <Route exact path="/doctorsPatientList" element={<DoctorsPatientList/>}> </Route>
                <Route exact path="/doctorsList" element={<DoctorsList/>}> </Route>
                <Route exact path="/doctorListClinicWise" element={<DoctorListClinicWise/>}> </Route>
                <Route exact path="/clinicsList" element={<ClinicsList/>}> </Route>
                <Route exact path="/onboardClinicAdmin" element={<OnboardClinicAdmin/>}> </Route>
                <Route exact path="/onboardDoctor" element={<OnboardDoctor/>}> </Route>
                <Route exact path="/onboardReceptionist" element={<OnboardReceptionist/>}> </Route>
                <Route exact path="/onboardClinic" element={<OnboardClinic/>}> </Route>
                <Route exact path="/onboardPatient" element={<OnboardPatient/>}> </Route>
                <Route exact path="/patientPatientList/:doctorId/:clinicId" element={<PatientPatientList/>}> </Route>
                  <Route exact path="/launch" element={<Launch/>}> </Route>
                  <Route exact path="/login" element={<Login/>}> </Route>
                  <Route exact path="/home" element={<Home/>}> </Route>
                  <Route exact path="/" element={<Launch/>}> </Route>
                </Routes>
                </BrowserRouter>
              </div>
         <div>Copy right</div>
    </div>
  );
}

export default App;
