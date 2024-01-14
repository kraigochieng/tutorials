package dev.kraigochieng.jpasec.dto;

import dev.kraigochieng.jpasec.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserRegistration {
    private String name;
    private String username;
    private String password;
    private List<Role> roles;
}
