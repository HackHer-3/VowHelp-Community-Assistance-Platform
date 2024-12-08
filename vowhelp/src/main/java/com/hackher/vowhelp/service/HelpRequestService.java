package com.hackher.vowhelp.service;

import com.hackher.vowhelp.model.HelpRequest;
import com.hackher.vowhelp.repository.HelpRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HelpRequestService {

    private final HelpRequestRepository helpRequestRepository;

    @Autowired
    public HelpRequestService(HelpRequestRepository helpRequestRepository) {
        this.helpRequestRepository = helpRequestRepository;
    }

    public List<HelpRequest> getAllRequests() {
        return helpRequestRepository.findAll();
    }

    public HelpRequest createRequest(HelpRequest helpRequest) {
        return helpRequestRepository.save(helpRequest);
    }

    // Method to get only emergency requests

    public List<HelpRequest> getEmergencyRequests() {
        return helpRequestRepository.findByUrgencyLevel("high");
    }

}