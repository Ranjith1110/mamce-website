
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Get all sidebar items
    const sidebarItems = document.querySelectorAll(".sidebar li");
    const contentSections = document.querySelectorAll(".content-section");

    // Add click event to each sidebar item
    sidebarItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove 'active' class from all sidebar items
            sidebarItems.forEach(i => i.classList.remove("active"));
            // Add 'active' class to clicked item
            item.classList.add("active");

            // Hide all content sections
            contentSections.forEach(section => section.classList.add("d-none"));

            // Show the corresponding content section
            const targetId = item.getAttribute("data-target");
            document.getElementById(targetId).classList.remove("d-none");
        });
    });
});