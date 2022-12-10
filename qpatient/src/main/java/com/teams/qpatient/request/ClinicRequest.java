package com.teams.qpatient.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ClinicRequest {
    private String name;
    private String city;
    private String area;
    private String areaCode;
}
