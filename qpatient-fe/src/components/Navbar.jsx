import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function VinNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Patient-Q</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/onBoardPatient">Book Apointment</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/launch">My Queue</Nav.Link>
            <Nav.Link href="/onboardClinic">Onboard Clinic</Nav.Link>
            <Nav.Link href="/onboardPatient">Onboard Patient</Nav.Link>
            <Nav.Link href="/onboardDoctor">Onboard Doctor</Nav.Link>
            <Nav.Link href="/onboardReceptionist">Onboard Receptionist</Nav.Link>
            <Nav.Link href="/onboardClinicAdmin">Onboard Clinic Admin</Nav.Link>
            <Nav.Link href="/clinicsList">Clinics List</Nav.Link>
            <Nav.Link href="/doctorListClinicWise">Doctor List Clinic-Wise</Nav.Link>
            <Nav.Link href="/doctorsList">Doctors List</Nav.Link>
            <Nav.Link href="/doctorsPatientList">Doctors Patient List</Nav.Link>
            <Nav.Link href="/patientPatientList">Patient List</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default VinNavbar;