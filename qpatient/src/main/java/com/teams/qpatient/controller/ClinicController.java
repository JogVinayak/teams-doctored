package com.teams.qpatient.controller;

import com.teams.qpatient.dao.Clinic;
import com.teams.qpatient.request.ClinicRequest;
import com.teams.qpatient.service.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@CrossOrigin(origins = "*")
public class ClinicController {

    private final List<SseEmitter> sses = new CopyOnWriteArrayList<>();

    @GetMapping(path="/emitter/clinic", produces= MediaType.TEXT_EVENT_STREAM_VALUE)
    SseEmitter createConnection() {
        SseEmitter emitter;
        emitter = new SseEmitter(Long.MAX_VALUE);
        sses.add(emitter);
        sses.forEach(ssev -> {
            try {
                ssev.send(clinicService.getAllClinics());
            } catch (IOException e) {
                //e.printStackTrace();
                sses.remove(ssev);
            }
        });
        return emitter;
    }

    @PostMapping(value = "/emitter/clinic")
    public Clinic saveEmitClinic(@RequestBody ClinicRequest request ){
        Clinic clinic = clinicService.saveClinic(request);
        sses.forEach(ssev -> {
            try{
                ssev.send(clinicService.getAllClinics());
            }catch (IOException e){
                sses.remove(ssev);
                //e.printStackTrace();
            }
        });
        return clinic;
    }

    @DeleteMapping(value ="/emitter/clinic/{clinicId}")
    public Boolean deleteEmitClinic(@PathVariable Long clinicId){
        Boolean result =  clinicService.deleteClinic(clinicId);
        if(result){
            sses.forEach(ssev -> {
                try{
                    ssev.send(clinicService.getAllClinics());
                }catch (IOException e){
                    sses.remove(ssev);
                    //e.printStackTrace();
                }
            });
        }
        return result;
    }

    @Autowired
    ClinicService clinicService;

    @GetMapping(value="/clinic")
    public List<Clinic> getAllClinics(){
        return clinicService.getAllClinics();
    }

    @PostMapping(value = "/clinic")
    public Clinic saveClinic(@RequestBody ClinicRequest request ){
        return clinicService.saveClinic(request);
    }

    @DeleteMapping(value ="/clinic/{clinicId}")
    public Boolean deleteClinic(@PathVariable Long clinicId){
        return clinicService.deleteClinic(clinicId);
    }
}
