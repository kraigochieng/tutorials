package dev.kraigochieng.jwtsym.service;

import dev.kraigochieng.jwtsym.dto.AuthResponse;
import dev.kraigochieng.jwtsym.dto.LoginRequest;
import dev.kraigochieng.jwtsym.dto.RegisterRequest;

public interface AuthService {
    public AuthResponse register(RegisterRequest registerRequest);
    public AuthResponse login(LoginRequest loginRequest);
}
