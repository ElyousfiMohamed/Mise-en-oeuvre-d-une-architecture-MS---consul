package com.example.billingservice;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "token")
public class myConsulConfig {
    private String accessTokenTimeout;
    private String refreshTokenTimeout;

    public String getAccessTokenTimeout() {
        return accessTokenTimeout;
    }

    public void setAccessTokenTimeout(String accessTokenTimeout) {
        this.accessTokenTimeout = accessTokenTimeout;
    }

    public String getRefreshTokenTimeout() {
        return refreshTokenTimeout;
    }

    public void setRefreshTokenTimeout(String refreshTokenTimeout) {
        this.refreshTokenTimeout = refreshTokenTimeout;
    }
}
