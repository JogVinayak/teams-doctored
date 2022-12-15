import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function OnboardClinic() {
    return (
        <Form>
        <h6>Onboard Clinic</h6>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name ="name"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter city" name ="area"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Area</Form.Label>
            <Form.Control type="text" placeholder="Enter area" name ="area"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Area code</Form.Label>
            <Form.Control type="text" placeholder="Enter area code" name ="address"/>
        </Form.Group>


        <Button variant="primary" >
            Submit
        </Button>
        </Form>
    )
}

export default OnboardClinic
