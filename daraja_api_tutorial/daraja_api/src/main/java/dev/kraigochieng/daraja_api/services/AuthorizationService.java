package dev.kraigochieng.daraja_api.services;

import dev.kraigochieng.daraja_api.dtos.AuthorizationResponse;
import dev.kraigochieng.daraja_api.dtos.RegisterUrlResponse;

public interface AuthorizationService {
    public AuthorizationResponse getAuthorization();
    public RegisterUrlResponse getRegisterUrl();
}
