package com.teams.qpatient.service;

import com.teams.qpatient.dao.Receptionist;
import com.teams.qpatient.repo.ReceptionistRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Slf4j
@Service
public class ReceptionistService {

    @Autowired
    ReceptionistRepository receptionistRepository;

    public List<Receptionist> findByClinic(Long clinicId){
        return receptionistRepository.findByClinicId(clinicId);
    }

    public Receptionist findById(Long receptionistId){
        return receptionistRepository.findById(receptionistId).get();
    }

    public Receptionist saveReceptionist(Receptionist receptionist){
        return receptionistRepository.save(receptionist);
    }
}
