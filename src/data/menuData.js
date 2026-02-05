// Menu data with real image paths (local and Unsplash for demo)
export const menuData = {
    appetizers: [
        { id: 1, name: 'Garlic Bread', price: 6.50, category: 'Appetizers', description: 'Toasted baguette with garlic butter and herbs', image: 'https://images.unsplash.com/photo-1573140247632-f84660f67627?auto=format&fit=crop&w=500&q=80', rating: { average: 4.5, count: 120 }, allowedAddOns: ['cheese', 'sauce'] },
        { id: 2, name: 'Bruschetta', price: 8.00, category: 'Appetizers', description: 'Grilled bread topped with tomato, basil & olive oil', image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=500&q=80', rating: { average: 4.7, count: 95 }, allowedAddOns: ['cheese'] },
        { id: 3, name: 'Mozzarella Sticks', price: 7.50, category: 'Appetizers', description: 'Golden fried mozzarella with marinara sauce', image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=500&q=80', rating: { average: 4.6, count: 150 }, allowedAddOns: ['sauce'] },
        { id: 4, name: 'Buffalo Wings', price: 10.00, category: 'Appetizers', description: 'Crispy wings tossed in spicy buffalo sauce', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=80', rating: { average: 4.8, count: 200 }, allowedAddOns: ['sauce', 'spiceLevel'] },
        { id: 5, name: 'Onion Rings', price: 6.00, category: 'Appetizers', description: 'Crispy batter-fried onion rings', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=500&q=80', rating: { average: 4.3, count: 80 }, allowedAddOns: ['sauce'] },
        { id: 6, name: 'Spring Rolls', price: 7.00, category: 'Appetizers', description: 'Vegetable rolls served with sweet & sour sauce', image: 'https://images.unsplash.com/photo-1544681280-d21c51068006?auto=format&fit=crop&w=500&q=80', rating: { average: 4.4, count: 65 }, allowedAddOns: ['sauce', 'spiceLevel'] },
        { id: 7, name: 'Loaded Nachos', price: 9.50, category: 'Appetizers', description: 'Tortilla chips with melted cheese and jalapeños', image: 'https://images.unsplash.com/photo-1513456852971-30cfa382c914?auto=format&fit=crop&w=500&q=80', rating: { average: 4.6, count: 110 }, allowedAddOns: ['cheese', 'sauce', 'spiceLevel'] },
        { id: 8, name: 'Calamari Rings', price: 11.00, category: 'Appetizers', description: 'Lightly battered fried squid with tartare sauce', image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=500&q=80', rating: { average: 4.5, count: 88 }, allowedAddOns: ['sauce'] },
    ],

    mains: [
        { id: 12, name: 'Deluxe Beef Burger', price: 15.50, category: 'Mains', description: 'Premium patty with cheddar, lettuce, tomato', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80', rating: { average: 4.9, count: 220 }, allowedAddOns: ['cheese', 'bacon', 'sauce', 'toppings'] },
        { id: 10, name: 'Margherita Pizza', price: 14.00, category: 'Mains', description: 'San Marzano tomato sauce, mozzarella di bufala', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80', rating: { average: 4.7, count: 300 }, allowedAddOns: ['cheese', 'toppings', 'crustType'] },
        { id: 9, name: 'Truffle Pasta', price: 18.50, category: 'Mains', description: 'Tagliatelle with black truffle cream sauce', image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=500&q=80', rating: { average: 4.9, count: 250 }, allowedAddOns: ['cheese', 'protein', 'spiceLevel'] },
        { id: 11, name: 'Grilled Salmon', price: 22.00, category: 'Mains', description: 'Fresh fillet with asparagus and lemon butter', image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=500&q=80', rating: { average: 4.8, count: 180 }, allowedAddOns: ['sauce'] },
        { id: 13, name: 'Chicken Caesar', price: 12.00, category: 'Mains', description: 'Crisp romaine, parmesan, croutons, grilled chicken', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=500&q=80', rating: { average: 4.4, count: 130 }, allowedAddOns: ['protein'] },
        { id: 14, name: 'Chicken Alfredo', price: 16.00, category: 'Mains', description: 'Fettuccine in rich parmesan cream sauce', image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=500&q=80', rating: { average: 4.7, count: 195 }, allowedAddOns: ['cheese', 'spiceLevel'] },
        { id: 15, name: 'Pepperoni Pizza', price: 15.50, category: 'Mains', description: 'Spicy pepperoni with double mozzarella', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80', rating: { average: 4.8, count: 280 }, allowedAddOns: ['cheese', 'toppings', 'crustType'] },
        { id: 16, name: 'BBQ Ribs', price: 20.00, category: 'Mains', description: 'Slow-cooked pork ribs with smoky BBQ glaze', image: 'https://images.unsplash.com/photo-1544516429-0321c6444983?auto=format&fit=crop&w=500&q=80', rating: { average: 4.9, count: 160 }, allowedAddOns: ['sauce', 'spiceLevel'] },
    ],

    desserts: [
        { id: 22, name: 'Tiramisu', price: 8.00, category: 'Desserts', description: 'Layers of espresso-soaked ladyfingers and mascarpone', image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=500&q=80', rating: { average: 4.9, count: 210 }, allowedAddOns: [] },
        { id: 23, name: 'Chocolate Lava Cake', price: 9.00, category: 'Desserts', description: 'Warm cake with molten center and vanilla ice cream', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=500&q=80', rating: { average: 4.8, count: 190 }, allowedAddOns: ['iceCream'] },
        { id: 24, name: 'NY Cheesecake', price: 7.50, category: 'Desserts', description: 'Classic creamy cheesecake with berry compote', image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=500&q=80', rating: { average: 4.7, count: 160 }, allowedAddOns: ['sauce'] },
        { id: 26, name: 'Brownie Sundae', price: 8.50, category: 'Desserts', description: 'Fudgy brownie topped with ice cream and fudge', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=500&q=80', rating: { average: 4.7, count: 180 }, allowedAddOns: ['iceCream', 'sauce'] },
    ],

    drinks: [
        { id: 30, name: 'Espresso', price: 3.50, category: 'Drinks', description: 'Rich, full-bodied single shot', image: 'https://images.unsplash.com/photo-1510707577719-2b45702b5fb4?auto=format&fit=crop&w=500&q=80', rating: { average: 4.7, count: 250 }, allowedAddOns: [] },
        { id: 32, name: 'Fresh Orange Juice', price: 5.00, category: 'Drinks', description: '100% freshly squeezed oranges', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80', rating: { average: 4.6, count: 180 }, allowedAddOns: [] },
        { id: 36, name: 'Berry Smoothie', price: 6.00, category: 'Drinks', description: 'Mixed berries blended with yogurt', image: 'https://images.unsplash.com/photo-1553530666-ba11a9068855?auto=format&fit=crop&w=500&q=80', rating: { average: 4.8, count: 165 }, allowedAddOns: [] },
        { id: 40, name: 'Chocolate Milkshake', price: 5.50, category: 'Drinks', description: 'Thick and creamy with whipped cream', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80', rating: { average: 4.9, count: 190 }, allowedAddOns: [] },
        { id: 37, name: 'Latte Art', price: 4.50, category: 'Drinks', description: 'Espresso with steamed milk foam', image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80', rating: { average: 4.7, count: 200 }, allowedAddOns: [] },
    ],
};

// Customization options
export const customizationOptions = {
    spiceLevel: [
        { id: 'mild', name: 'Mild', price: 0 },
        { id: 'medium', name: 'Medium', price: 0 },
        { id: 'hot', name: 'Hot', price: 0 },
        { id: 'extraHot', name: 'Extra Hot', price: 0 },
    ],
    addOns: {
        cheese: { id: 'cheese', name: 'Extra Cheese', price: 2.00 },
        bacon: { id: 'bacon', name: 'Bacon', price: 3.00 },
        avocado: { id: 'avocado', name: 'Avocado', price: 2.50 },
        sauce: { id: 'sauce', name: 'Extra Sauce', price: 1.00 },
        protein: { id: 'protein', name: 'Add Chicken', price: 4.00 },
        toppings: { id: 'toppings', name: 'Extra Toppings', price: 2.50 },
        crustType: { id: 'crustType', name: 'Stuffed Crust', price: 3.00 },
        iceCream: { id: 'iceCream', name: 'Add Ice Cream', price: 2.00 },
        spiceLevel: { id: 'spiceLevel', name: 'Spice Level', price: 0 },
    },
};
