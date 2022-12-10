package com.teams.qpatient.controller;

import com.teams.qpatient.dao.Doctor;
import com.teams.qpatient.repo.DoctorRepository;
import com.teams.qpatient.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping
@CrossOrigin(origins = "*")
public class DoctorController {

    @Autowired
    DoctorService doctorService;

    @GetMapping("/doctor")
    public List<Doctor> getAllDoctors(){
        return  doctorService.getAllDoctors();
    }

    @GetMapping("/doctor/{clinicId}")
    public List<Doctor> getDoctorsByClinicId(@PathVariable Long clinicId){
        return doctorService.getDoctorsByClinicId(clinicId);
    }

    @DeleteMapping("/doctor/{doctorId}")
    public Boolean deleteDoctor(@PathVariable Long doctorId){
        return doctorService.deleteDoctor(doctorId);
    }

}
