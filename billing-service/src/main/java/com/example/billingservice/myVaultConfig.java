package com.example.billingservice;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "user")
public class myVaultConfig {
    private String username;
    private String passwclearord;
    private String otp;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    public String getPasswclearord() {
        return passwclearord;
    }

    public void setPasswclearord(String passwclearord) {
        this.passwclearord = passwclearord;
    }
}
