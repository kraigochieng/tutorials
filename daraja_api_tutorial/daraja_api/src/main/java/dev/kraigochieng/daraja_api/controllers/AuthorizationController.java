package dev.kraigochieng.daraja_api.controllers;

import dev.kraigochieng.daraja_api.dtos.AuthorizationResponse;
import dev.kraigochieng.daraja_api.dtos.RegisterUrlResponse;
import dev.kraigochieng.daraja_api.services.AuthorizationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/mobile-money")
@CrossOrigin
public class AuthorizationController {
    @Autowired
    AuthorizationServiceImpl authorizationService;
    @GetMapping(path = "authorize", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthorizationResponse> getAuthorization() {
        return  ResponseEntity
                .status(HttpStatus.OK)
                .body(authorizationService.getAuthorization());
    }

    @PostMapping(path = "register-url", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RegisterUrlResponse> getRegisterUrl() {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(authorizationService.getRegisterUrl());
    }
}
