package dev.kraigochieng.dcbsecurity.service;

import dev.kraigochieng.dcbsecurity.dto.RegisterRequest;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public interface AuthService {
    public UsernamePasswordAuthenticationToken register(RegisterRequest registerRequest);
}
