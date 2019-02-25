package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SpringbootDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootDemoApplication.class, args);
	}

	@RequestMapping("/")
	public String sayHello() {
		return "Hello Spring boot Application";
	}
	@RequestMapping("/taskinetics")
	public String taskinetics() {
		return "hello taskinetics";
	}
}