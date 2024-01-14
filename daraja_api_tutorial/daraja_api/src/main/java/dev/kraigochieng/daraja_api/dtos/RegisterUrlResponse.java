package dev.kraigochieng.daraja_api.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterUrlResponse {
    @JsonProperty(value = "OriginatorCoversationID")
    private String originatorCoversationID;
    @JsonProperty(value = "ResponseCode")
    private Integer responseCode;
    @JsonProperty(value = "ResponseDirection")
    private String responseDescription;
}

