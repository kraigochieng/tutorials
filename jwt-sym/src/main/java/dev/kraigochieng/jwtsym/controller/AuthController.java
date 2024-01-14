package dev.kraigochieng.jwtsym.controller;

import dev.kraigochieng.jwtsym.dto.AuthResponse;
import dev.kraigochieng.jwtsym.dto.LoginRequest;
import dev.kraigochieng.jwtsym.dto.RegisterRequest;
import dev.kraigochieng.jwtsym.service.AuthServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "api/v1/auth")
public class AuthController {
    @Autowired
    AuthServiceImpl authServiceImpl;

    @PostMapping(path = "register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest registerRequest) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(authServiceImpl.register(registerRequest));
    }

    @PostMapping(path = "login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(authServiceImpl.login(loginRequest));
    }
}
