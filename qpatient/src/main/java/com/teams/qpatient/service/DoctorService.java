package com.teams.qpatient.service;

import com.teams.qpatient.dao.Doctor;
import com.teams.qpatient.repo.DoctorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Slf4j
@Service
public class DoctorService {
    @Autowired
    DoctorRepository doctorRepository;


    public Doctor getDoctor(Long doctorId){
        return doctorRepository.findById(doctorId).get();
    }

    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }

    public List<Doctor> getDoctorsByClinicId(Long clinicId){
        return doctorRepository.findByClinicId(clinicId);
    }

    public Boolean deleteDoctor(Long doctorId){
        try {
            Doctor doctor = doctorRepository.findById(doctorId).get();
            doctorRepository.delete(doctor);
        }catch (Exception e ){
            log.error(e.getMessage());
            return false;
        }
        return true;
    }

    public Doctor saveDoctor(Doctor doctor){
        return doctorRepository.save(doctor);
    }
}
