document.addEventListener("DOMContentLoaded", () => {
    // Select the interactive box and message box
    const interactiveBox = document.getElementById("interactiveBox");
    const clickMessage = document.getElementById("clickMessage");
  
    // Ensure the interactive box is targetable by hovering
    interactiveBox.addEventListener("mouseenter", () => {
      interactiveBox.style.backgroundColor = "#e9ecef"; // Light gray on hover
      interactiveBox.style.transform = "scale(1.05)"; // Slightly enlarge the box on hover
    });
  
    interactiveBox.addEventListener("mouseleave", () => {
      interactiveBox.style.backgroundColor = "#f9f9f9"; // Reset to original color
      interactiveBox.style.transform = "scale(1)"; // Reset the size
    });
  
    // Change the message and box appearance when clicked
    interactiveBox.addEventListener("click", () => {
      clickMessage.classList.add("show"); // Show the message box
      clickMessage.innerHTML = "<p>You clicked the box! The background color changes and the message appears.</p>";
      interactiveBox.style.backgroundColor = "#007bff"; // Change box color to blue
      interactiveBox.style.color = "#fff"; // Change text color to white
    });
  });
    