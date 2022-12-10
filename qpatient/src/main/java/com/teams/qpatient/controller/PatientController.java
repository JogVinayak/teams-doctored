package com.teams.qpatient.controller;

import com.teams.qpatient.dao.Patient;
import com.teams.qpatient.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class PatientController {

    @Autowired
    PatientService patientService;

    @GetMapping("/patient/all")
    public List<Patient> getPatient(){
        return patientService.getAllPatients();
    }

    @GetMapping("/patient/{patientId}")
    public Patient getPatient(@PathVariable Long patientId){
        return patientService.getPatientById( patientId);
    }

/*    @GetMapping("/patient-clinic/{clinicId}")
    public List<Patient> getPatientListByClinicId(Long clinicId){
        return patientService.getPatientByClinic(clinicId);
    }*/

    @DeleteMapping("/patient/{patientId}")
    public Boolean deletePatientById(@PathVariable Long patientId) {
        return patientService.deletePatientById(patientId);
    }

    @GetMapping("/patient-doctor/{doctorId}")
    public List<Patient> getPatientListByDoctorId(@PathVariable Long doctorId){
        return patientService.getPatientsByDoctor(doctorId);
    }

    @PostMapping("/patient")
    public Patient postPatient(@RequestBody Patient patient){
        return patientService.savePatient(patient);
    }

}
