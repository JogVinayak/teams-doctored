import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState, useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';

function OnboardDoctor() {

    const [clinicList, setClinicList] = useState([]);
    const [clinicName, setClinicName] = useState([]); 
    const [doctorName, setDoctorName] = useState([]); 
    const [clinicId, setClinicId] = useState([]);

    const [name, setName] = useState([]);
    const [phone, setPhone] = useState([]);
    const [speciality, setSpeciality] = useState([]);
    const [grade, setGrade] = useState([]);
    const [availability, setAvailability] = useState([]);

    useEffect(() => {
        setDoctorName( "Select Doctor" );
        setClinicName( "Select Clinic");
        axios.get("http://localhost:8080/clinic")
        .then( (res) => setClinicList(res.data) )
    }, [])

    const handleSelectClinic = (e) => {
        const jsonValue = JSON.parse(e);
        console.log(jsonValue);
        setClinicName(jsonValue.name);
        setClinicId(jsonValue.clinicId);
    }

    const handleName = (e) => {
        console.log("Name : " + e.target.value);
        setName(e.target.value);
    }

    const handlePhone = (e) => {
        console.log("Phone : " + e.target.value);
        setPhone(e.target.value);
    }

    const handleSpeciality = (e) => {
        console.log("Speciality : " + e.target.value);
        setSpeciality(e.target.value);
    }

    const handleGrade = (e) => {
        console.log("Grade : " + e.target.value);
        setGrade(e.target.value);
    }

    const handleAvailability = (e) => {
        console.log("Availability : " + e.target.value);
        setAvailability(e.target.value);
    }



    const getDoctorDetails = () => {
        return {
            "name" : name,
            "phone" : phone,
            "speciality": speciality,
            "grade": grade,
            "availability": availability,
            "clinicId": clinicId
        };
    }

    const handleSubmit = () => {
        axios(
            {
                method: "post",
                url: "http://localhost:8080/doctor",
                data: getDoctorDetails()
            }).then(
                (res) => {
                    console.log(res.data); 
                }
            );
    }

    return (
        <Form>
        <h6>Onboard Doctor</h6>    
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name ="name" onChange={handleName}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone" name ="phone" onChange={handlePhone}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Speciality</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone" name ="speciality" onChange={handleSpeciality}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
            <Form.Label>Grade</Form.Label>
            <Form.Control type="text" placeholder="Grade" onChange={handleGrade}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Availability</Form.Label>
            <Form.Control type="text" placeholder="Availability" onChange={handleAvailability}/>
        </Form.Group>
        <Form.Label>Select Clinic</Form.Label>
        <DropdownButton id="dropdown-item-button" variant="outline-secondary" title={clinicName} onSelect={handleSelectClinic}>
            {
                clinicList.map((c) => {
                    return <Dropdown.Item key = {c.clinicId} eventKey={JSON.stringify(c)} >{c.name}</Dropdown.Item>
                })
            }
        </DropdownButton>
        <br/>
        <Button variant="primary" onClick={handleSubmit}>
            Submit
        </Button>
        </Form>
    )
}

export default OnboardDoctor
