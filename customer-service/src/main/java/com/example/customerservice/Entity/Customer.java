package com.example.customerservice.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @Builder
public class Customer {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int age;
    private String sexe;
    private String ville;
    private String email;

    public Customer(String name, int age, String sexe, String ville, String email) {
        this.name = name;
        this.age = age;
        this.sexe = sexe;
        this.ville = ville;
        this.email = email;
    }
}
