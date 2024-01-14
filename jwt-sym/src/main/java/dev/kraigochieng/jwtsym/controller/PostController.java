package dev.kraigochieng.jwtsym.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1/posts")
@CrossOrigin
public class PostController {
    @GetMapping
    @PreAuthorize("hasAuthority('SCOPE_READ_POST')")
    public String getPosts() {
        return "Hello, read";
    }


    @PostMapping
    @PreAuthorize("hasAuthority('SCOPE_CREATE_POST')")
    public String createPost() {
        return "Hello, create";
    }

    @PreAuthorize("hasAuthority('SCOPE_DELETE_POST')")
    @DeleteMapping
    public String deletePost() {
        return "Hello, delete";
    }

    @PreAuthorize("hasAuthority('SCOPE_UPDATE_POST')")
    @PutMapping
    public String updatePost() {
        return "Hello, update";
    }
}
