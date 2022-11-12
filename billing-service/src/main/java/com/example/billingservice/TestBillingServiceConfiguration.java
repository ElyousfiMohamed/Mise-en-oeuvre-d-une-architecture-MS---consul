package com.example.billingservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController @RefreshScope
public class TestBillingServiceConfiguration {
    @Autowired
    private myConsulConfig myConsulConfig;
    @Autowired
    private myVaultConfig myVaultConfig;

    @GetMapping("/token")
    public String getToken() {
        return "accessTokenTimeout: " + myConsulConfig.getAccessTokenTimeout()+ ", refreshTokenTimeout: " + myConsulConfig.getRefreshTokenTimeout();
    }

    @GetMapping("/user")
    public String getUser() {
        return "username: " + myVaultConfig.getUsername() + ", password: " + myVaultConfig.getPasswclearord()+", otp: " + myVaultConfig.getOtp();
    }
}
