package dev.kraigochieng.jwtsym;

import dev.kraigochieng.jwtsym.model.Role;
import dev.kraigochieng.jwtsym.model.UserEntity;
import dev.kraigochieng.jwtsym.repository.UserEntityRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication
public class JwtSymApplication {

	public static void main(String[] args) {
		SpringApplication.run(JwtSymApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(UserEntityRepository userEntityRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			UserEntity userEntity1 = new UserEntity();
			userEntity1.setName("Kraig Ochieng");
			userEntity1.setUsername("kraig");
			userEntity1.setPassword(passwordEncoder.encode("password"));
			userEntity1.setRoles(List.of(Role.CREATE_POST, Role.READ_POST, Role.UPDATE_POST, Role.DELETE_POST));

			UserEntity userEntity2 = new UserEntity();
			userEntity2.setName("Kraig2 Ochieng2");
			userEntity2.setUsername("kraig2");
			userEntity2.setPassword(passwordEncoder.encode("password"));
			userEntity2.setRoles(List.of(Role.CREATE_POST, Role.READ_POST, Role.UPDATE_POST));

			UserEntity userEntity3 = new UserEntity();
			userEntity3.setName("Kraig3 Ochieng3");
			userEntity3.setUsername("kraig3");
			userEntity3.setPassword(passwordEncoder.encode("password"));
			userEntity3.setRoles(List.of(Role.CREATE_POST, Role.READ_POST));

			UserEntity userEntity4 = new UserEntity();
			userEntity4.setName("Kraig4 Ochieng4");
			userEntity4.setUsername("kraig4");
			userEntity4.setPassword(passwordEncoder.encode("password"));
			userEntity4.setRoles(List.of(Role.CREATE_POST));

			userEntityRepository.saveAll(List.of(userEntity1, userEntity2, userEntity3, userEntity4));
		};
	}

}
