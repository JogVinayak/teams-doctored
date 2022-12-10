package com.teams.qpatient.service;

import com.teams.qpatient.dao.Clinic;
import com.teams.qpatient.repo.ClinicRepository;
import com.teams.qpatient.request.ClinicRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClinicService {
    @Autowired
    ClinicRepository clinicRepository;

    public List<Clinic> getAllClinics(){
        return clinicRepository.findAll();
    }

    public Clinic saveClinic(ClinicRequest clinic){
        Clinic clinicDao = new Clinic( clinic.getName(), clinic.getCity(), clinic.getArea(), clinic.getAreaCode());
        return clinicRepository.save(clinicDao);
    }

    public Boolean deleteClinic(Long clinicId) {
        try {
            Clinic clinic = clinicRepository.findById(clinicId).get();
            clinicRepository.delete(clinic);
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }
}
