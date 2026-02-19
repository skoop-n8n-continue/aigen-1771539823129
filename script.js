document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome App Initialized");
    
    // Select elements
    const container = document.querySelector(".container");
    const greetingElement = document.getElementById("greeting");
    
    // Add simple animation trigger
    setTimeout(() => {
        if (container) {
            container.classList.add("visible");
        }
    }, 100);

    // Optional: Dynamic greeting based on time of day
    const hour = new Date().getHours();
    let timeGreeting = "Welcome";
    
    // Uncomment below to enable time-based greeting
    /*
    if (hour < 12) {
        timeGreeting = "Good Morning";
    } else if (hour < 18) {
        timeGreeting = "Good Afternoon";
    } else {
        timeGreeting = "Good Evening";
    }
    // greetingElement.textContent = timeGreeting;
    */
    
    // Log canvas dimensions for debugging signage resolution
    console.log(`Viewport Size: ${window.innerWidth}x${window.innerHeight}`);
    
    // Handle resize events to ensure layout adapts
    window.addEventListener("resize", () => {
        console.log(`Resized to: ${window.innerWidth}x${window.innerHeight}`);
    });
});
