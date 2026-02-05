🍽️ AmazeMeals | Full-Stack Order Management Ecosystem


AmazeMeals is a sophisticated, end-to-end digital solution designed to streamline the modern dining experience. From a fluid, responsive digital menu to a robust backend kitchen queue, AmazeMeals demonstrates the power of the Spring Boot + React stack in solving real-world hospitality challenges.

🌟 Key Features
🛒 Seamless Guest Experience
Digital Menu: A visually rich, categorized menu (Appetizers, Mains, Desserts, Drinks) with real-time availability updates.

Smart Cart: Interactive order building with item-level customization and instant total updates.

Responsive Design: Optimized for mobile, tablet, and desktop using Tailwind CSS.

⚙️ Operational Excellence
Kitchen Order Management: A FIFO-based (First-In-First-Out) queue system that tracks orders from submission to serving.

Automated Billing Engine: Precise calculations including variable service charges, taxes, and promotional discounts.

Reporting & Analytics: Dashboard for management to track daily sales performance and identify trending items.

🛠️ Technical Architecture
Frontend (The Interface)
Library: React 18

Styling: Tailwind CSS (Utility-first CSS)

State Management: React Hooks (useState, useContext)

Communication: Axios for REST API consumption

Backend (The Core)
Framework: Java / Spring Boot

Persistence: Spring Data JPA / Hibernate

Logic: Custom Service layer for order queuing and billing algorithms.

Security: Role-based access for Kitchen Staff vs. Management.

Data Layer
Database: MySQL (3NF Normalized)

Storage: File I/O for generating downloadable PDF invoices and sales reports.

📐 Design Patterns & Principles
N-Tier Architecture: Strict separation of concerns between Presentation, Service, and Data layers.

DTO Pattern: Use of Data Transfer Objects to ensure secure and efficient data exchange between Frontend and Backend.

OOP Mastery:

Inheritance: Base classes for different categories of menu offerings.

Encapsulation: Protecting business logic within service boundaries.

Strategy Pattern: (Implemented for the billing engine to handle various discount types).