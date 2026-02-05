package com.amazemeals.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuItem {
    private String id;
    private String name;
    private double price;
    private String description;
    private String image;
    private String category;
    private Rating rating;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Rating {
        private double average;
        private int count;
    }
}
