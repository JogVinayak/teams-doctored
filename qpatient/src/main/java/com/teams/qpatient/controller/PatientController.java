package com.teams.qpatient.controller;

import com.teams.qpatient.dao.Patient;
import com.teams.qpatient.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@CrossOrigin(origins = "*")
public class PatientController {

    @Autowired
    PatientService patientService;

    private final List<SseEmitter> sses = new CopyOnWriteArrayList<>();

    @GetMapping(path="/emitter/patient/{doctorId}/{clinicId}", produces= MediaType.TEXT_EVENT_STREAM_VALUE)
    SseEmitter createConnection( @PathVariable Long doctorId, @PathVariable Long clinicId) {
        SseEmitter emitter;
        emitter = new SseEmitter(Long.MAX_VALUE);
        sses.add(emitter);
        sendSse(doctorId, clinicId);
        return emitter;
    }

    private void sendSse(Long doctorId, Long clinicId) {
        sses.forEach(ssev -> {
            try {
                ssev.send(patientService.getPatientsByDoctorIdAndClinicId(doctorId, clinicId));
            } catch (IOException e) {
                //e.printStackTrace();
                sses.remove(ssev);
            }
        });
    }


    @GetMapping("/patient/all")
    public List<Patient> getPatient(){
        return patientService.getAllPatients();
    }

    @GetMapping("/patient/{patientId}")
    public Patient getPatient(@PathVariable Long patientId){
        return patientService.getPatientById( patientId);
    }

    @DeleteMapping("/patient/{patientId}")
    public Boolean deletePatientById(@PathVariable Long patientId) {
        Patient patient = patientService.getPatientById(patientId);
        Boolean result =  patientService.deletePatientById(patientId);
        sendSse(patient.getDoctorId(), patient.getClinicId());
        return result;
    }

    @GetMapping("/patient-doctor/{doctorId}/{clinicId}")
    public List<Patient> getPatientListByDoctorId(@PathVariable Long doctorId, @PathVariable Long clinicId){
        return patientService.getPatientsByDoctorIdAndClinicId(doctorId, clinicId);
    }

    @PostMapping("/patient")
    public Patient postPatient(@RequestBody Patient patient){
        Patient patient1 =  patientService.savePatient(patient);
        sendSse(patient.getDoctorId(), patient.getClinicId());
        return patient1;
    }

}
