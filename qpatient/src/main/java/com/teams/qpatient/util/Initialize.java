package com.teams.qpatient.util;

import com.teams.qpatient.dao.Clinic;
import com.teams.qpatient.repo.ClinicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class Initialize {

    @Autowired
    ClinicRepository clinicRepository;


    @PostConstruct
    public void createClinic(){
        List<Clinic> clinicList = Stream.of(
                new Clinic(1l, "Clinic 1", "city 1", "area 1","560066"),
                new Clinic(2l, "Clinic 2", "city 2", "area 2","560066"),
                new Clinic(3l, "Clinic 3", "city 3", "area 3","560066"),
                new Clinic(4l, "Clinic 4", "city 4", "area 4","560066"),
                new Clinic(5l, "Clinic 5", "city 5", "area 5","560066")
        ).collect(Collectors.toList());


        clinicRepository.saveAll(clinicList);


    }
}
