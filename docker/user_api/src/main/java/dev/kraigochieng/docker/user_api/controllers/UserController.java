package dev.kraigochieng.docker.user_api.controllers;

import dev.kraigochieng.docker.user_api.models.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/users")
@CrossOrigin
public class UserController {
    @GetMapping
    public List<User> getUser() {
        List<User> users = new ArrayList<>();
        users.add(new User("Bob", "bob@gmail.com"));
        users.add(new User("Jane", "jane@gmail.com"));
        return users;
    }
}
