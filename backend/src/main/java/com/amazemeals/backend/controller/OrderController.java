package com.amazemeals.backend.controller;

import com.amazemeals.backend.model.Order;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private List<Order> orders = new ArrayList<>();

    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        order.setId(UUID.randomUUID().toString());
        order.setStatus("pending");
        order.setTimestamp(java.time.Instant.now().toString());
        orders.add(order);
        System.out.println("New Order Received: " + order);
        return order;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orders;
    }

    @GetMapping("/{id}")
    public Order getOrder(@PathVariable String id) {
        return orders.stream()
                .filter(o -> o.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}
