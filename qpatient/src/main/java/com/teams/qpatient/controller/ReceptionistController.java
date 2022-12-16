package com.teams.qpatient.controller;

import com.teams.qpatient.dao.Receptionist;
import com.teams.qpatient.service.ReceptionistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/receptionist/")
public class ReceptionistController {

    @Autowired
    ReceptionistService receptionistService;

    @GetMapping("get/{receptionistId}")
    public Receptionist getReceptionist(@PathVariable Long receptionistId){
        return receptionistService.findById(receptionistId);
    }

    @GetMapping("getByClinic/{clinicId}")
    public List<Receptionist> getByClinic(@PathVariable Long clinicId){
        return receptionistService.findByClinic(clinicId);
    }

    @PostMapping("save")
    public Receptionist save(@RequestBody Receptionist receptionist){
        return receptionistService.saveReceptionist(receptionist);
    }


}
