package dev.kraigochieng.jpasec.controller;

import dev.kraigochieng.jpasec.model.Post;
import dev.kraigochieng.jpasec.service.PostServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/v1/posts")
public class PostController {
    @Autowired
    PostServiceImpl postServiceImpl;

    @GetMapping
    public ResponseEntity<List<Post>> getPosts() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(postServiceImpl.getPosts());
    }

    @GetMapping("{postId}")
    public  ResponseEntity<Post> getPost(@PathVariable UUID postId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(postServiceImpl.getPostById(postId));
    }
}
