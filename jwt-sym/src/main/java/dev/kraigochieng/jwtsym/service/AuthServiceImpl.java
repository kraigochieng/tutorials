package dev.kraigochieng.jwtsym.service;

import dev.kraigochieng.jwtsym.dto.AuthResponse;
import dev.kraigochieng.jwtsym.dto.LoginRequest;
import dev.kraigochieng.jwtsym.dto.RegisterRequest;
import dev.kraigochieng.jwtsym.model.UserEntity;
import dev.kraigochieng.jwtsym.repository.UserEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    JwtServiceImpl jwtServiceImpl;

    @Autowired
    UserEntityRepository userEntityRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;


    @Autowired
    UserDetailsService userDetailsService;
    @Override
    public AuthResponse register(RegisterRequest registerRequest) {
        UserEntity userEntity = new UserEntity();
        userEntity.setName(registerRequest.getName());
        userEntity.setUsername(registerRequest.getUsername());
        userEntity.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        userEntity.setRoles(registerRequest.getRoles());
        userEntityRepository.save(userEntity);

        UserDetails userDetails = userDetailsService.loadUserByUsername(registerRequest.getUsername());

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                userDetails,
                userDetails.getPassword(),
                userDetails.getAuthorities()
        );

//        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
//                registerRequest.getUsername(),
//                registerRequest.getPassword()
//        );
        AuthResponse authResponse = new AuthResponse();

        authResponse.setToken(jwtServiceImpl.generateToken(usernamePasswordAuthenticationToken));
        authResponse.setPrincipal(usernamePasswordAuthenticationToken);

        return authResponse;
    }

    @Override
    public AuthResponse login(LoginRequest loginRequest) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getUsername());

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                userDetails,
                loginRequest.getPassword(),
                userDetails.getAuthorities()
        );

        authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        AuthResponse authResponse = new AuthResponse();
        authResponse.setToken(jwtServiceImpl.generateToken(usernamePasswordAuthenticationToken));
        authResponse.setPrincipal(usernamePasswordAuthenticationToken);
        return  authResponse;
    }
}
