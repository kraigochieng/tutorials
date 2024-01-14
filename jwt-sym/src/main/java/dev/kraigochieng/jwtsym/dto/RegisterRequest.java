package dev.kraigochieng.jwtsym.dto;

import dev.kraigochieng.jwtsym.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class RegisterRequest {
    private String name;
    private String username;
    private String password;
    private List<Role> roles;
}
