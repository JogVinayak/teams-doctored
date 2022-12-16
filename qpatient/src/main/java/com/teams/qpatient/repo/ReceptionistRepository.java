package com.teams.qpatient.repo;

import com.teams.qpatient.dao.Receptionist;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReceptionistRepository extends JpaRepository<Receptionist, Long> {

    List<Receptionist> findByClinicId(Long clinicId);
}
