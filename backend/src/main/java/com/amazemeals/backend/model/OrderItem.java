package com.amazemeals.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {
    private String itemId;
    private String name;
    private int quantity;
    private double price;
    private List<String> addons;
    private String specialInstructions;
}
