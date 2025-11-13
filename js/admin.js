// MusicMate Admin Panel Validation
// Based on teacher's validation patterns

// User management validation
function validateAddUser() {
    var firstName = document.getElementById("userFirstName").value.trim();
    var lastName = document.getElementById("userLastName").value.trim();
    var email = document.getElementById("userEmail").value.trim();
    var password = document.getElementById("userPassword").value.trim();
    var role = document.getElementById("userRole").value;

    // Clear previous error messages
    document.getElementById("userFirstNameError").innerHTML = "";
    document.getElementById("userLastNameError").innerHTML = "";
    document.getElementById("userEmailError").innerHTML = "";
    document.getElementById("userPasswordError").innerHTML = "";
    document.getElementById("userRoleError").innerHTML = "";

    var namePattern = /^[A-Za-z\s]+$/;

    // First name validation
    if (firstName === "") {
        document.getElementById("userFirstNameError").innerHTML = "Please enter first name";
        return false;
    }
    if (!namePattern.test(firstName)) {
        document.getElementById("userFirstNameError").innerHTML = "Name must contain only letters";
        return false;
    }

    // Last name validation
    if (lastName === "") {
        document.getElementById("userLastNameError").innerHTML = "Please enter last name";
        return false;
    }
    if (!namePattern.test(lastName)) {
        document.getElementById("userLastNameError").innerHTML = "Name must contain only letters";
        return false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("userEmailError").innerHTML = "Please enter email";
        return false;
    }

    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailFormat.test(email)) {
        document.getElementById("userEmailError").innerHTML = "Enter a valid email format";
        return false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("userPasswordError").innerHTML = "Please enter password";
        return false;
    }

    if (password.length < 6 || password.length > 12) {
        document.getElementById("userPasswordError").innerHTML = "Password must be 6–12 characters long";
        return false;
    }

    var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    if (!passFormat.test(password)) {
        document.getElementById("userPasswordError").innerHTML = "Password must contain at least 1 letter and 1 number";
        return false;
    }

    // Role validation
    if (role === "") {
        document.getElementById("userRoleError").innerHTML = "Please select user role";
        return false;
    }

    return true;
}

// Music upload validation
function validateMusicUpload() {
    var title = document.getElementById("songTitle").value.trim();
    var artist = document.getElementById("artistName").value.trim();
    var genre = document.getElementById("genre").value;
    var releaseYear = document.getElementById("releaseYear").value.trim();
    var audioFile = document.getElementById("audioFile").files[0];

    // Clear previous error messages
    document.getElementById("songTitleError").innerHTML = "";
    document.getElementById("artistNameError").innerHTML = "";
    document.getElementById("genreError").innerHTML = "";
    document.getElementById("releaseYearError").innerHTML = "";
    document.getElementById("audioFileError").innerHTML = "";

    var namePattern = /^[A-Za-z0-9\s\-']+$/;

    // Title validation
    if (title === "") {
        document.getElementById("songTitleError").innerHTML = "Please enter song title";
        return false;
    }
    if (!namePattern.test(title)) {
        document.getElementById("songTitleError").innerHTML = "Title contains invalid characters";
        return false;
    }

    // Artist validation
    if (artist === "") {
        document.getElementById("artistNameError").innerHTML = "Please enter artist name";
        return false;
    }
    if (!namePattern.test(artist)) {
        document.getElementById("artistNameError").innerHTML = "Artist name contains invalid characters";
        return false;
    }

    // Genre validation
    if (genre === "") {
        document.getElementById("genreError").innerHTML = "Please select genre";
        return false;
    }

    // Release year validation
    if (releaseYear === "") {
        document.getElementById("releaseYearError").innerHTML = "Please enter release year";
        return false;
    }

    var currentYear = new Date().getFullYear();
    var year = parseInt(releaseYear);

    if (isNaN(year) || year < 1900 || year > currentYear) {
        document.getElementById("releaseYearError").innerHTML = `Release year must be between 1900 and ${currentYear}`;
        return false;
    }

    // Audio file validation
    if (!audioFile) {
        document.getElementById("audioFileError").innerHTML = "Please select an audio file";
        return false;
    }

    var allowedTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/ogg'];
    if (!allowedTypes.includes(audioFile.type)) {
        document.getElementById("audioFileError").innerHTML = "Please select a valid audio file (MP3, WAV, OGG)";
        return false;
    }

    var maxSize = 50 * 1024 * 1024; // 50MB
    if (audioFile.size > maxSize) {
        document.getElementById("audioFileError").innerHTML = "File size must be less than 50MB";
        return false;
    }

    return true;
}

// Settings validation
function validateEmailSettings() {
    var smtpServer = document.getElementById("smtpServer").value.trim();
    var smtpPort = document.getElementById("smtpPort").value.trim();
    var smtpUsername = document.getElementById("smtpUsername").value.trim();
    var smtpPassword = document.getElementById("smtpPassword").value.trim();

    // Clear previous error messages
    document.getElementById("smtpServerError").innerHTML = "";
    document.getElementById("smtpPortError").innerHTML = "";
    document.getElementById("smtpUsernameError").innerHTML = "";
    document.getElementById("smtpPasswordError").innerHTML = "";

    // SMTP Server validation
    if (smtpServer === "") {
        document.getElementById("smtpServerError").innerHTML = "Please enter SMTP server";
        return false;
    }

    var serverPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!serverPattern.test(smtpServer)) {
        document.getElementById("smtpServerError").innerHTML = "Enter a valid server address";
        return false;
    }

    // SMTP Port validation
    if (smtpPort === "") {
        document.getElementById("smtpPortError").innerHTML = "Please enter SMTP port";
        return false;
    }

    var port = parseInt(smtpPort);
    if (isNaN(port) || port < 1 || port > 65535) {
        document.getElementById("smtpPortError").innerHTML = "Enter a valid port number (1-65535)";
        return false;
    }

    // SMTP Username validation (email)
    if (smtpUsername === "") {
        document.getElementById("smtpUsernameError").innerHTML = "Please enter SMTP username";
        return false;
    }

    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailFormat.test(smtpUsername)) {
        document.getElementById("smtpUsernameError").innerHTML = "Enter a valid email format";
        return false;
    }

    // SMTP Password validation
    if (smtpPassword === "") {
        document.getElementById("smtpPasswordError").innerHTML = "Please enter SMTP password";
        return false;
    }

    if (smtpPassword.length < 6) {
        document.getElementById("smtpPasswordError").innerHTML = "Password must be at least 6 characters long";
        return false;
    }

    return true;
}

// Handle form submissions
function handleAddUser() {
    if (validateAddUser()) {
        var firstName = document.getElementById("userFirstName").value.trim();
        alert(`User ${firstName} has been added successfully!`);
        // Reset form or close modal
    }
}

function handleMusicUpload() {
    if (validateMusicUpload()) {
        var title = document.getElementById("songTitle").value.trim();
        alert(`Song "${title}" has been uploaded successfully!`);
        // Reset form
        document.getElementById("uploadForm").reset();
    }
}

function handleEmailSettings() {
    if (validateEmailSettings()) {
        alert('Email settings have been saved successfully!');
    }
}

// General admin validation utilities
function validateRequired(fieldId, errorId, fieldName) {
    var value = document.getElementById(fieldId).value.trim();
    
    if (value === "") {
        document.getElementById(errorId).innerHTML = `Please enter ${fieldName}`;
        return false;
    }
    
    document.getElementById(errorId).innerHTML = "";
    return true;
}

function validateEmail(fieldId, errorId) {
    var email = document.getElementById(fieldId).value.trim();
    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    
    if (!emailFormat.test(email)) {
        document.getElementById(errorId).innerHTML = "Enter a valid email format";
        return false;
    }
    
    document.getElementById(errorId).innerHTML = "";
    return true;
}

function validateNumber(fieldId, errorId, min, max, fieldName) {
    var value = document.getElementById(fieldId).value.trim();
    var number = parseInt(value);
    
    if (isNaN(number) || number < min || number > max) {
        document.getElementById(errorId).innerHTML = `${fieldName} must be between ${min} and ${max}`;
        return false;
    }
    
    document.getElementById(errorId).innerHTML = "";
    return true;
}
