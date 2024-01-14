package dev.kraigochieng.dcbsecurity.controller;

import dev.kraigochieng.dcbsecurity.dto.RegisterRequest;
import dev.kraigochieng.dcbsecurity.service.AuthServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1/auth")
@CrossOrigin

public class AuthController {

    @Autowired
    AuthServiceImpl authServiceImpl;

    @PostMapping(path = "register")
    public ResponseEntity<UsernamePasswordAuthenticationToken> register(@RequestBody RegisterRequest registerRequest) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(authServiceImpl.register(registerRequest));
    }
}
