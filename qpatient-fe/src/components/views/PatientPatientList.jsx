import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';



function PatientPatientList() {

    const [patientList, setPatientList] = useState([]);
    const [clinicName, setClinicName] = useState([]); 
    const [doctorName, setDoctorName] = useState([]); 
    

    const [name, setName] = useState([]);
    const [phone, setPhone] = useState([]);
    const [speciality, setSpeciality] = useState([]);
    const [grade, setGrade] = useState([]);
    const [availability, setAvailability] = useState([]);

    const { doctorId } = useParams();
    const { clinicId } = useParams();

    useEffect(() => {

        axios.get("http://localhost:8080/patient-doctor/"+doctorId+"/"+ clinicId)
        .then((res) => {
                console.log("Res is ===>" + JSON.stringify(res.data));
                setPatientList(res.data)
            }
        )
    }, [])


    return (
        <div>
            <Table  striped="columns" size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Age</th>
                </tr>
                </thead>
                <tbody>    
                {
                    patientList.map((patient,index) => {
                        console.log(patient);
                        return <tr key={++index}>
                                    <td>{++index}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.phone}</td>
                                    <td>{patient.age}</td>
                                </tr>
                    })
                }
                </tbody>
            </Table>
        </div>
    )
}

export default PatientPatientList
