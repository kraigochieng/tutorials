package dev.kraigochieng.daraja_api.configuration;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "mpesa.daraja")
public class MpesaConfiguration {
    // Authorization
    private String consumerKey;
    private String consumerSecret;
    private String grantType;
    private String oauthEndpoint;

    // Register URL
    private String shortCode;
    private String confirmationUrl;
    private String validationUrl;
    private String registerUrlEndpoint;
}
