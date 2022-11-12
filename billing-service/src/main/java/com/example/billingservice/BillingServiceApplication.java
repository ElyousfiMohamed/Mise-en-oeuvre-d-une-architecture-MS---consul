package com.example.billingservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.vault.core.VaultTemplate;
import org.springframework.vault.support.Versioned;

import java.util.Map;


@SpringBootApplication
public class BillingServiceApplication {

	@Autowired
	private VaultTemplate vaultTemplate;

	public static void main(String[] args) {
		SpringApplication.run(BillingServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start () {
		return args -> {
			Versioned.Metadata response =  vaultTemplate.opsForVersionedKeyValue("secret")
					.put("keypair", Map.of("privateKey","55225522","publicKey","55885588"));

			System.out.println(response);
		};
	}
}
