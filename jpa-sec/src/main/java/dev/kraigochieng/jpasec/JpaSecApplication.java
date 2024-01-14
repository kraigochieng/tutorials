package dev.kraigochieng.jpasec;

import dev.kraigochieng.jpasec.dto.UserRegistration;
import dev.kraigochieng.jpasec.mapper.UserEntityMapper;
import dev.kraigochieng.jpasec.model.Post;
import dev.kraigochieng.jpasec.model.Role;
import dev.kraigochieng.jpasec.model.UserEntity;
import dev.kraigochieng.jpasec.repository.PostRepository;
import dev.kraigochieng.jpasec.repository.UserEntityRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication
public class JpaSecApplication {

	public static void main(String[] args) {
		SpringApplication.run(JpaSecApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(PostRepository postRepository, UserEntityRepository userEntityRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			Post post = new Post();
			post.setTitle("A");

//			UserRegistration userRegistration = new UserRegistration();
//			userRegistration.setUsername("kraig");
//			userRegistration.setPassword(passwordEncoder.encode("password"));
//			userRegistration.setName("Kraig");
//			userRegistration.setRoles(List.of(Role.CREATE_POST, Role.DELETE_POST));
//
//			UserEntity user = UserEntityMapper.INSTANCE.UserRegistrationToUserEntity(userRegistration);
//
//			userEntityRepository.save(user);

			postRepository.save(post);
		};
	}
}
