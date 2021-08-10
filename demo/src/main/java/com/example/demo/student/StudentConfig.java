package com.example.demo.student;

import java.time.LocalDate;
import java.time.Month;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student jeremias = new Student("Jeremias", "Jeremias@gmail.com", LocalDate.of(1996, Month.APRIL, 13));
            Student luna = new Student("Luna", "Luna@gmail.com", LocalDate.of(1998, Month.NOVEMBER, 23));

            repository.saveAll(List.of(jeremias, luna));
        };
    }
}
