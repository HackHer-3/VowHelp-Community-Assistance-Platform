package com.hackher.vowhelp.controller;

import com.hackher.vowhelp.model.HelpRequest;
import com.hackher.vowhelp.service.HelpRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/requests")
public class HelpRequestController {

    private final HelpRequestService helpRequestService;

    @Autowired
    public HelpRequestController(HelpRequestService helpRequestService) {
        this.helpRequestService = helpRequestService;
    }

    @GetMapping
    public List<HelpRequest> getAllRequests() {
        return helpRequestService.getAllRequests();
    }

    @PostMapping
    public ResponseEntity<HelpRequest> createRequest(@RequestBody HelpRequest helpRequest) {
        HelpRequest createdRequest = helpRequestService.createRequest(helpRequest);
        return new ResponseEntity<>(createdRequest, HttpStatus.CREATED);
    }
}
