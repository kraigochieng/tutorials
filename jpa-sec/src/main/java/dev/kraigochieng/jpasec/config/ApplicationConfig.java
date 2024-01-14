package dev.kraigochieng.jpasec.config;

import dev.kraigochieng.jpasec.repository.UserEntityRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class ApplicationConfig {
    @Autowired
    UserEntityRepository userEntityRepository;
    @Bean
    public UserDetailsService userDetailsService() {
        return username -> userEntityRepository
                .findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("Username " + username + "not found"));
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
