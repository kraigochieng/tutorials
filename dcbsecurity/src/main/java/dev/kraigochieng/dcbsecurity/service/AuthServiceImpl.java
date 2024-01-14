package dev.kraigochieng.dcbsecurity.service;

import dev.kraigochieng.dcbsecurity.dto.RegisterRequest;
import dev.kraigochieng.dcbsecurity.entity.UserEntity;
import dev.kraigochieng.dcbsecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;
    @Override
    public UsernamePasswordAuthenticationToken register(RegisterRequest registerRequest) {
        // Make user
        UserEntity user = new UserEntity();
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setEmail(registerRequest.getEmail());
        user.setUsername(registerRequest.getUsername());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setRoles(new HashSet<>(registerRequest.getRoles()));
        // Save user
        userRepository.save(user);
        // Create token
        return new UsernamePasswordAuthenticationToken(registerRequest.getUsername(), registerRequest.getPassword());
    }
}
