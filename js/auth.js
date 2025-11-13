// MusicMate Authentication Validation
// Based on teacher's validation patterns

function validateLogin() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    // Clear previous error messages
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email";
        return false;
    }

    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailFormat.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email format";
        return false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Please enter your password";
        return false;
    }

    if (password.length < 6 || password.length > 12) {
        document.getElementById("passwordError").innerHTML = "Password must be 6–12 characters long";
        return false;
    }

    var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    if (!passFormat.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must contain at least 1 letter and 1 number";
        return false;
    }

    return true;
}

function validateSignup() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var musicPreference = document.getElementById("musicPreference").value;
    var agreeTerms = document.getElementById("agreeTerms").checked;

    // Clear previous error messages
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
    document.getElementById("musicPreferenceError").innerHTML = "";
    document.getElementById("termsError").innerHTML = "";

    var namePattern = /^[A-Za-z\s]+$/;

    // First name validation
    if (firstName === "") {
        document.getElementById("firstNameError").innerHTML = "Please enter your first name";
        return false;
    }
    if (!namePattern.test(firstName)) {
        document.getElementById("firstNameError").innerHTML = "Name must contain only letters";
        return false;
    }
    if (!isNaN(firstName)) {
        document.getElementById("firstNameError").innerHTML = "Name must contain only letters";
        return false;
    }

    // Last name validation
    if (lastName === "") {
        document.getElementById("lastNameError").innerHTML = "Please enter your last name";
        return false;
    }
    if (!namePattern.test(lastName)) {
        document.getElementById("lastNameError").innerHTML = "Name must contain only letters";
        return false;
    }
    if (!isNaN(lastName)) {
        document.getElementById("lastNameError").innerHTML = "Name must contain only letters";
        return false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email";
        return false;
    }

    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailFormat.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email format";
        return false;
    }

    // Phone validation (optional field)
    if (phone !== "") {
        var phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            document.getElementById("phoneError").innerHTML = "Enter a valid 10-digit phone number";
            return false;
        }
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Please enter your password";
        return false;
    }

    if (password.length < 6 || password.length > 12) {
        document.getElementById("passwordError").innerHTML = "Password must be 6–12 characters long";
        return false;
    }

    var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    if (!passFormat.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must contain at least 1 letter and 1 number";
        return false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerHTML = "Please confirm your password";
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        return false;
    }

    // Music preference validation
    if (musicPreference === "") {
        document.getElementById("musicPreferenceError").innerHTML = "Please select your favorite genre";
        return false;
    }

    // Terms validation
    if (!agreeTerms) {
        document.getElementById("termsError").innerHTML = "Please accept the terms and privacy policy";
        return false;
    }

    return true;
}

// Admin login validation
function validateAdminLogin() {
    var email = document.getElementById("adminEmail").value.trim();
    var password = document.getElementById("adminPassword").value.trim();

    // Clear previous error messages
    document.getElementById("adminEmailError").innerHTML = "";
    document.getElementById("adminPasswordError").innerHTML = "";

    // Email validation
    if (email === "") {
        document.getElementById("adminEmailError").innerHTML = "Please enter admin email";
        return false;
    }

    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailFormat.test(email)) {
        document.getElementById("adminEmailError").innerHTML = "Enter a valid email format";
        return false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("adminPasswordError").innerHTML = "Please enter admin password";
        return false;
    }

    if (password.length < 6) {
        document.getElementById("adminPasswordError").innerHTML = "Password must be at least 6 characters long";
        return false;
    }

    return true;
}

// Handle login form submission
function handleLogin() {
    if (validateLogin()) {
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value.trim();
        var remember = document.getElementById("remember").checked;

        // Check for admin login
        if (email.toLowerCase() === 'admin@musicmate.com' && password === 'admin123') {
            alert('Welcome Admin! Redirecting to admin dashboard...');
            setTimeout(() => {
                window.location.href = '../admin/index.html';
            }, 1500);
            return;
        }

        // Regular user login
        const message = `Welcome back! ${remember ? "We'll remember you next time." : ""} Redirecting to music player...`;
        alert(message);
        if (remember) {
            localStorage.setItem('rememberMe', 'true');
            localStorage.setItem('userEmail', email);
        }
        setTimeout(() => {
            window.location.href = 'music-player.html';
        }, 1500);
    }
}

// Handle signup form submission
function handleSignup() {
    if (validateSignup()) {
        var firstName = document.getElementById("firstName").value.trim();
        var newsletter = document.getElementById("newsletter").checked;

        const message = `Welcome ${firstName}! Your MusicMate account has been created successfully.\n\n${newsletter ? 'You have been subscribed to our newsletter.' : ''} Redirecting to login page...`;
        alert(message);

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
}
