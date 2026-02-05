package com.amazemeals.backend.controller;

import com.amazemeals.backend.model.MenuItem;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    @GetMapping
    public Map<String, List<MenuItem>> getMenu() {
        // Mock data to match frontend menuData
        Map<String, List<MenuItem>> menu = new HashMap<>();

        // Appetizers
        List<MenuItem> appetizers = new ArrayList<>();
        appetizers.add(new MenuItem("1", "Crispy Calamari", 12.99, "Tender calamari rings served with marinara sauce.",
                "https://images.unsplash.com/photo-1604909052743-94e838986d24", "appetizers",
                new MenuItem.Rating(4.5, 120)));
        menu.put("appetizers", appetizers);

        // Mains
        List<MenuItem> mains = new ArrayList<>();
        mains.add(new MenuItem("3", "Truffle Mushroom Pasta", 18.99, "Fettuccine with wild mushrooms and truffle oil.",
                "https://images.unsplash.com/photo-1473093295043-cdd812d0e601", "mains", new MenuItem.Rating(4.9, 85)));
        menu.put("mains", mains);

        // Desserts
        List<MenuItem> desserts = new ArrayList<>();
        desserts.add(new MenuItem("5", "Molten Lava Cake", 8.99, "Warm chocolate cake with a gooey center.",
                "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9", "desserts",
                new MenuItem.Rating(4.8, 200)));
        menu.put("desserts", desserts);

        return menu;
    }
}
