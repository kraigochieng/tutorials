package dev.kraigochieng.jpasec.service;

import dev.kraigochieng.jpasec.model.Post;

import java.util.List;
import java.util.UUID;

public interface PostService {
    public List<Post> getPosts();
    public Post getPostById(UUID postId);
}
