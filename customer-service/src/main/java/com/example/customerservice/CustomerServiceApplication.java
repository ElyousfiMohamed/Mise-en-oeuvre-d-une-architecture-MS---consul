package com.example.customerservice;

import com.example.customerservice.Entity.Customer;
import com.example.customerservice.Repository.CustomerRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.List;

@SpringBootApplication
@EnableDiscoveryClient
@FeignClient
public class CustomerServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(CustomerRepository customerRepository){
		return args -> {
			Faker faker = new Faker();
			for(int i=0;i<43;i++) {
				String name= faker.name().fullName();
				String sexe = Math.random() > 0.5 ? "Men":"Women";
				customerRepository.save(new Customer(name,faker.random().nextInt(18,70),sexe,faker.country().capital(),name.split(" ")[0]+"@Contact.me"));
			}
		};
	}
}
