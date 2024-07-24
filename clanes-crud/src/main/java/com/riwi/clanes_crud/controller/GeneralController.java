package com.riwi.clanes_crud.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/")
@AllArgsConstructor
public class GeneralController {
    
    @GetMapping
    public ResponseEntity<Map<String, String>> getMethodName(@RequestParam String param) {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Welcome new user! navigate to http://localhost:8080/clan");
        return ResponseEntity.ok(response);
    }
    

}
