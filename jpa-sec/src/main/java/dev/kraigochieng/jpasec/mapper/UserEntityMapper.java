package dev.kraigochieng.jpasec.mapper;

import dev.kraigochieng.jpasec.dto.UserRegistration;
import dev.kraigochieng.jpasec.model.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.HashSet;

@Mapper
public interface UserEntityMapper {
    UserEntityMapper INSTANCE = Mappers.getMapper(UserEntityMapper.class);

    default UserEntity UserRegistrationToUserEntity(UserRegistration userRegistration) {
        UserEntity userEntity = new UserEntity();

        userEntity.setName(userRegistration.getName());
        userEntity.setUsername(userRegistration.getUsername());
        userEntity.setPassword(userRegistration.getPassword()); // This is encoded in the auth service
        userEntity.setRoles(new HashSet<>(userRegistration.getRoles()));

        return userEntity;
    }
}
