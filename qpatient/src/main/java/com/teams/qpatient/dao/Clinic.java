package com.teams.qpatient.dao;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Clinic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long clinicId;
    private String name;
    private String city;
    private String area;
    private String areaCode;

    public Clinic(String name, String city, String area, String areaCode){
        this.name = name;
        this.city = city;
        this.area = area;
        this.areaCode = areaCode;
    }

}
