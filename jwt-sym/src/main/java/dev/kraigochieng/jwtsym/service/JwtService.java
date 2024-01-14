package dev.kraigochieng.jwtsym.service;

import org.springframework.security.core.Authentication;

public interface JwtService {
    public String generateToken(Authentication authentication);
}
