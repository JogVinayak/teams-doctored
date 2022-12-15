import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function OnboardPatient() {
    const navigate = useNavigate();
    const [clinicList, setClinicList] = useState([]);
    const [clinicName, setClinicName] = useState([]); 
    const [doctorName, setDoctorName] = useState([]); 
    const [doctorList, setDoctorList] = useState([]);

    const [name, setName] = useState([]);
    const [phone, setPhone] = useState([]);
    const [age, setAge] = useState([]);
    const [clinicId, setClinicId] = useState([]);
    const [doctorId, setDoctorId] = useState([]);

    useEffect(() => {
        setDoctorName( "Select Doctor" );
        setClinicName( "Select Clinic");
        axios.get("http://localhost:8080/clinic")
        .then( (res) => setClinicList(res.data) )
    }, [])

    const handleSelectClinic = (e) => {
        const jsonValue = JSON.parse(e);
        setClinicName(jsonValue.name);
        setClinicId(jsonValue.clinicId);
        axios.get("http://localhost:8080/doctor/" + jsonValue.clinicId)
        .then((res) => {
                console.log("Res is ===>" + JSON.stringify(res));
                setDoctorList(res.data)
                
            }
        );
    }

    const handleSelectDoctor = (e) => {
        const jsonValue = JSON.parse(e);
        console.log(jsonValue);
        setDoctorName(jsonValue.name);
        setDoctorId(jsonValue.doctorId);
    }

    const getData =()=>{
        return {
            "name" : name,
            "phone": phone,
            "age" : age,
            "clinicId": clinicId,
            "doctorId": doctorId
        }
    }

    const handleSubmit = () => {
        axios(
            {
                method: "post",
                url: "http://localhost:8080/patient",
                data: getData()
            }).then(
                (res) => {
                    console.log(res.data); 
                    navigate("/patientPatientList/" + doctorId + "/" + clinicId);
                }
            );
    }

    const handleNameEntry = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handlePhoneEntry = (e) => {
        console.log("From Phone : " + e.target.value);
        setPhone(e.target.value)
    }

    const handleAge = (e) => {
        console.log("From Phone : " + e.target.value);
        setAge(e.target.value)
    }


    return (
       
        <Form>
        <h4>Book Appointment</h4>    
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name </Form.Label>
            <Form.Control type="text" placeholder="Enter name" name ="name" autoComplete="on" onChange={handleNameEntry}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Phone" autoComplete="on" onChange={handlePhoneEntry}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Age" autoComplete="on" onChange={handleAge}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            
        <Form.Label>Select Clinic</Form.Label>
        <DropdownButton id="dropdown-item-button" variant="outline-secondary" title={clinicName} onSelect={handleSelectClinic}>
            {
                clinicList.map((c) => {
                    return <Dropdown.Item key = {c.clinicId + Math.random() * 100} id = {c.clinicId} eventKey={JSON.stringify(c)} >{c.name}</Dropdown.Item>
                })
            }
        </DropdownButton>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            
        <Form.Label>Select Doctor</Form.Label>
        <DropdownButton id="dropdown-item-button" variant="outline-secondary" title={doctorName} onSelect={handleSelectDoctor}>    
        {
            doctorList.map((c) => {
                return <Dropdown.Item key={c.clinicId + Math.random() * 100} id = {c.clinicId} eventKey={JSON.stringify(c)} >{c.name}</Dropdown.Item>
            })
        }
        </DropdownButton>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
            Book Appointment
        </Button>
        </Form>
        
    )
}

export default OnboardPatient
