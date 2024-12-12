// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a simple alert after form submission
    alert("Details sent successfully!");

  
    document.getElementById("contact-form").reset();
});
