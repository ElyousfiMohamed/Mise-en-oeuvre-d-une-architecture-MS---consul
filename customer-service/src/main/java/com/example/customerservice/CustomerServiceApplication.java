package com.example.customerservice;

import com.example.customerservice.Entity.Customer;
import com.example.customerservice.Repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class CustomerServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(CustomerRepository customerRepository){
		return args -> {
			customerRepository.saveAll(List.of(
					Customer.builder().name("Mohamed").email("Mohamed@gmail.com").build(),
					Customer.builder().name("Fatima").email("Fatima@gmail.com").build(),
					Customer.builder().name("Oussama").email("Oussama@gmail.com").build()
			));
		};
	}

}
