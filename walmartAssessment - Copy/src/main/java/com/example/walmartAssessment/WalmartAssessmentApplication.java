package com.example.walmartAssessment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;


@SpringBootApplication
@CrossOrigin
public class WalmartAssessmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(WalmartAssessmentApplication.class, args);
	}


}