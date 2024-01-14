package dev.kraigochieng.jwtsym.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.Authentication;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class AuthResponse {
    private String token;
    private Authentication principal;
}
