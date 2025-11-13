// MusicMate Contact Form Validation
// Based on teacher's validation patterns

function validateContact() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    // Clear previous error messages
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("subjectError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    var namePattern = /^[A-Za-z\s]+$/;

    // First name validation
    if (firstName === "") {
        document.getElementById("firstNameError").innerHTML = "Please enter your first name";
        return false;
    }
    if (!namePattern.test(firstName)) {
        document.getElementById("firstNameError").innerHTML = "First name must contain only letters";
        return false;
    }

    // Last name validation
    if (lastName === "") {
        document.getElementById("lastNameError").innerHTML = "Please enter your last name";
        return false;
    }
    if (!namePattern.test(lastName)) {
        document.getElementById("lastNameError").innerHTML = "Last name must contain only letters";
        return false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email";
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email format";
        return false;
    }

    // Subject validation
    if (subject === "") {
        document.getElementById("subjectError").innerHTML = "Please enter a subject";
        return false;
    }

    if (subject.length < 5) {
        document.getElementById("subjectError").innerHTML = "Subject must be at least 5 characters long";
        return false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Please enter your message";
        return false;
    }

    if (message.length < 10) {
        document.getElementById("messageError").innerHTML = "Message must be at least 10 characters long";
        return false;
    }

    return true;
}

// Handle contact form submission
function handleContactSubmission() {
    if (validateContact()) {
        var firstName = document.getElementById("firstName").value.trim();
        
        alert(`Thank you ${firstName}! Your message has been sent successfully. We'll get back to you soon.`);
        
        // Reset form
        document.getElementById("contactForm").reset();
        
        // Clear error messages
        document.getElementById("firstNameError").innerHTML = "";
        document.getElementById("lastNameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("subjectError").innerHTML = "";
        document.getElementById("messageError").innerHTML = "";
    }
}
