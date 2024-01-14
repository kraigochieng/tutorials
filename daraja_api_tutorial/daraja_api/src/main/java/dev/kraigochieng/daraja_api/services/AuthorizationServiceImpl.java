package dev.kraigochieng.daraja_api.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.kraigochieng.daraja_api.configuration.MpesaConfiguration;
import dev.kraigochieng.daraja_api.dtos.AuthorizationResponse;
import dev.kraigochieng.daraja_api.dtos.RegisterUrlRequest;
import dev.kraigochieng.daraja_api.dtos.RegisterUrlResponse;
import lombok.extern.slf4j.Slf4j;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
@Service
@Slf4j
public class AuthorizationServiceImpl implements AuthorizationService{
    @Autowired
    MpesaConfiguration mpesaConfiguration;

    @Autowired
    OkHttpClient okHttpClient;

    @Autowired
    ObjectMapper objectMapper;

    @Override
    public AuthorizationResponse getAuthorization() {
        // Combine Key as  secret and separate using colon
        String keyAndSecret = mpesaConfiguration.getConsumerKey() + ":" + mpesaConfiguration.getConsumerSecret();
        // Encode
        String encodedKeyAndSecret = toBase64String(keyAndSecret);
        // Build request
        Request request = new Request.Builder()
                .url(mpesaConfiguration.getOauthEndpoint() + "?grant_type=" + mpesaConfiguration.getGrantType())
                .get()
                .addHeader("authorization", "Basic " + encodedKeyAndSecret)
                .addHeader("cache-control", "no-cache")
                .build();

        try {
            Response response = okHttpClient
                    .newCall(request)
                    .execute();

            assert response.body() != null;
            return objectMapper.readValue(response.body().string(), AuthorizationResponse.class);
        } catch (IOException e) {
            log.error("Could not get Authorization Response: " + e.getMessage());
            return null;
        }
    }

    @Override
    public RegisterUrlResponse getRegisterUrl() {
        AuthorizationResponse authorizationResponse = getAuthorization();

        RegisterUrlRequest registerUrlRequest = new RegisterUrlRequest();
        registerUrlRequest.setShortCode(mpesaConfiguration.getShortCode());
        registerUrlRequest.setResponseType(RegisterUrlRequest.ResponseType.COMPLETED);
        registerUrlRequest.setConfirmationURL(mpesaConfiguration.getConfirmationUrl());
        registerUrlRequest.setValidationURL(mpesaConfiguration.getValidationUrl());

        RequestBody body = RequestBody.create(MediaType.parse("application/json; charset=utf-8"), toJson(registerUrlRequest));

        Request request = new Request.Builder()
                .url(mpesaConfiguration.getRegisterUrlEndpoint())
                .post(body)
                .addHeader("Authorization", "Bearer " + authorizationResponse.getAccessToken())
                .build();

        try {
            Response response = okHttpClient.newCall(request).execute();
            assert response.body() != null;
            return objectMapper.readValue(response.body().string(), RegisterUrlResponse.class);
        } catch (IOException e) {
            log.error("Could not register URL: " + e.getLocalizedMessage());
            return null;
        }
    }

    public String toBase64String(String value) {
        byte[] data = value.getBytes(StandardCharsets.ISO_8859_1);
        return Base64
                .getEncoder()
                .encodeToString(data);
    }

    public String toJson(Object object) {
        try {
            return new ObjectMapper().writeValueAsString(object);
        } catch (JsonProcessingException e) {
            return null;
        }
    }
}
