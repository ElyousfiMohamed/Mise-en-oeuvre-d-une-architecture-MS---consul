package com.example.inventoryservice.Repository;

import com.example.inventoryservice.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@RepositoryRestResource
@CrossOrigin(origins = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE,RequestMethod.PATCH},exposedHeaders="Access-Control-Allow-Origin")
public interface ProductRepository extends JpaRepository<Product, Long> {
}

