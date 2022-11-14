package com.example.customerservice.Repository;

import com.example.customerservice.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@RepositoryRestResource
@CrossOrigin(origins = "*")
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
