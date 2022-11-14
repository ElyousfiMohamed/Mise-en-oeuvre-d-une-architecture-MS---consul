package com.example.customerservice.Controller;

import com.example.customerservice.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RefreshScope
@CrossOrigin(origins = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE,RequestMethod.PATCH},exposedHeaders="Access-Control-Allow-Origin")
public class ConfigTestController {
    @Value("${global.params.p1}")
    private String p1;
    @Value("${global.params.p2}")
    private String p2;
    @Value("${customer.params.x}")
    private String x;
    @Value("${customer.params.y}")
    private String y;

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/params")
    public Map<String,String> params() {
        return Map.of("p1", p1, "p2", p2, "x", x, "y", y);
    }

    @DeleteMapping("/customers/{id}")
    public void delete(@PathVariable Long id) {
        customerRepository.deleteById(id);
    }
}
