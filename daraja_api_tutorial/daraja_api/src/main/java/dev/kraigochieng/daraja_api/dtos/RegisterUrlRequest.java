package dev.kraigochieng.daraja_api.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RegisterUrlRequest {

    public enum ResponseType {
        CANCELED("Canceled"),
        COMPLETED("Completed");

        private String value;
        ResponseType(String value) {
            this.value = value;
        }

        @Override
        public String toString() {
            return value;
        }
    }

    @JsonProperty(value = "ShortCode")
    private String shortCode;
    @JsonProperty(value = "ResponseType")
    private ResponseType responseType;
    @JsonProperty(value = "ConfirmationURL")
    private String confirmationURL;
    @JsonProperty(value = "ValidationURL")
    private String validationURL;

}
