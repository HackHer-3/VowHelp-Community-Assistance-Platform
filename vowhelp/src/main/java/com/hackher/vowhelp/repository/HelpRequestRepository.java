package com.hackher.vowhelp.repository;

import com.hackher.vowhelp.model.HelpRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HelpRequestRepository extends JpaRepository<HelpRequest, Long> {

    // Custom query to get only high urgency requests
    List<HelpRequest> findByUrgencyLevel(String urgencyLevel);
}