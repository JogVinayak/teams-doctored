package com.teams.qpatient.service;

import com.teams.qpatient.dao.Patient;
import com.teams.qpatient.repo.PatientRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class PatientService {

    @Autowired
    PatientRepository patientRepository;

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public List<Patient> getPatientsByDoctorIdAndClinicId( Long doctorId, Long clinicId){
        return patientRepository.findByDoctorIdAndClinicId(doctorId, clinicId);
    }

    public Boolean deletePatientById(Long patientId){
        try {
            Patient patient = patientRepository.findById(patientId).get();
            patientRepository.delete(patient);
        }catch (Exception e){
            log.error(e.getMessage());
            return false;
        }
        return true;
    }

    public Patient getPatientById(Long patientId) {
        return patientRepository.findById(patientId).get();
    }

    public Patient savePatient(Patient patient){
        return patientRepository.save(patient);
    }
}
