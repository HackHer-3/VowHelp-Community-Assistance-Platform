package com.hackher.vowhelp.controller;

import com.hackher.vowhelp.model.HelpRequest;
import com.hackher.vowhelp.service.HelpRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/emergency-requests")
public class EmergencyRequestController {

    private final HelpRequestService helpRequestService;

    @Autowired
    public EmergencyRequestController(HelpRequestService helpRequestService) {
        this.helpRequestService = helpRequestService;
    }

    // Endpoint to get only emergency requests
    @GetMapping
    public List<HelpRequest> getEmergencyRequests() {
        return helpRequestService.getEmergencyRequests();
    }
}