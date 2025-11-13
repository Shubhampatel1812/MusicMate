// MusicMate Player Validation and Utilities
// Based on teacher's validation patterns

// Playlist creation validation
function validatePlaylistCreation() {
    var playlistName = document.getElementById("playlistName").value.trim();
    var description = document.getElementById("playlistDescription").value.trim();

    // Clear previous error messages
    document.getElementById("playlistNameError").innerHTML = "";
    document.getElementById("playlistDescriptionError").innerHTML = "";

    // Playlist name validation
    if (playlistName === "") {
        document.getElementById("playlistNameError").innerHTML = "Please enter playlist name";
        return false;
    }

    if (playlistName.length < 3) {
        document.getElementById("playlistNameError").innerHTML = "Playlist name must be at least 3 characters long";
        return false;
    }

    if (playlistName.length > 50) {
        document.getElementById("playlistNameError").innerHTML = "Playlist name must be less than 50 characters";
        return false;
    }

    var namePattern = /^[A-Za-z0-9\s\-']+$/;
    if (!namePattern.test(playlistName)) {
        document.getElementById("playlistNameError").innerHTML = "Playlist name contains invalid characters";
        return false;
    }

    // Description validation (optional)
    if (description !== "" && description.length < 10) {
        document.getElementById("playlistDescriptionError").innerHTML = "Description must be at least 10 characters long";
        return false;
    }

    if (description.length > 200) {
        document.getElementById("playlistDescriptionError").innerHTML = "Description must be less than 200 characters";
        return false;
    }

    return true;
}

// User profile update validation
function validateProfileUpdate() {
    var displayName = document.getElementById("displayName").value.trim();
    var bio = document.getElementById("bio").value.trim();
    var favoriteGenre = document.getElementById("favoriteGenre").value;

    // Clear previous error messages
    document.getElementById("displayNameError").innerHTML = "";
    document.getElementById("bioError").innerHTML = "";
    document.getElementById("favoriteGenreError").innerHTML = "";

    var namePattern = /^[A-Za-z0-9\s\-']+$/;

    // Display name validation
    if (displayName === "") {
        document.getElementById("displayNameError").innerHTML = "Please enter display name";
        return false;
    }

    if (displayName.length < 3) {
        document.getElementById("displayNameError").innerHTML = "Display name must be at least 3 characters long";
        return false;
    }

    if (displayName.length > 30) {
        document.getElementById("displayNameError").innerHTML = "Display name must be less than 30 characters";
        return false;
    }

    if (!namePattern.test(displayName)) {
        document.getElementById("displayNameError").innerHTML = "Display name contains invalid characters";
        return false;
    }

    // Bio validation (optional)
    if (bio !== "" && bio.length < 10) {
        document.getElementById("bioError").innerHTML = "Bio must be at least 10 characters long";
        return false;
    }

    if (bio.length > 500) {
        document.getElementById("bioError").innerHTML = "Bio must be less than 500 characters";
        return false;
    }

    // Favorite genre validation
    if (favoriteGenre === "") {
        document.getElementById("favoriteGenreError").innerHTML = "Please select your favorite genre";
        return false;
    }

    return true;
}

// Search validation
function validateSearch() {
    var searchQuery = document.getElementById("searchInput").value.trim();
    
    // Clear previous error messages
    document.getElementById("searchError").innerHTML = "";

    if (searchQuery === "") {
        document.getElementById("searchError").innerHTML = "Please enter a search term";
        return false;
    }

    if (searchQuery.length < 2) {
        document.getElementById("searchError").innerHTML = "Search term must be at least 2 characters long";
        return false;
    }

    if (searchQuery.length > 100) {
        document.getElementById("searchError").innerHTML = "Search term must be less than 100 characters";
        return false;
    }

    // Allow letters, numbers, spaces, and common punctuation
    var searchPattern = /^[A-Za-z0-9\s\-'".!?]+$/;
    if (!searchPattern.test(searchQuery)) {
        document.getElementById("searchError").innerHTML = "Search contains invalid characters";
        return false;
    }

    return true;
}

// Rating validation
function validateRating() {
    var rating = document.querySelector('input[name="rating"]:checked');
    var review = document.getElementById("reviewText").value.trim();

    // Clear previous error messages
    document.getElementById("ratingError").innerHTML = "";
    document.getElementById("reviewError").innerHTML = "";

    // Rating validation
    if (!rating) {
        document.getElementById("ratingError").innerHTML = "Please select a rating";
        return false;
    }

    // Review validation (optional)
    if (review !== "" && review.length < 10) {
        document.getElementById("reviewError").innerHTML = "Review must be at least 10 characters long";
        return false;
    }

    if (review.length > 1000) {
        document.getElementById("reviewError").innerHTML = "Review must be less than 1000 characters";
        return false;
    }

    return true;
}

// Handle form submissions
function handlePlaylistCreation() {
    if (validatePlaylistCreation()) {
        var playlistName = document.getElementById("playlistName").value.trim();
        alert(`Playlist "${playlistName}" has been created successfully!`);
        
        // Reset form
        document.getElementById("playlistForm").reset();
        
        // Clear error messages
        document.getElementById("playlistNameError").innerHTML = "";
        document.getElementById("playlistDescriptionError").innerHTML = "";
    }
}

function handleProfileUpdate() {
    if (validateProfileUpdate()) {
        var displayName = document.getElementById("displayName").value.trim();
        alert(`Profile updated successfully! Welcome ${displayName}!`);
    }
}

function handleSearch() {
    if (validateSearch()) {
        var searchQuery = document.getElementById("searchInput").value.trim();
        alert(`Searching for: "${searchQuery}"`);
        // Implement actual search functionality
    }
}

function handleRating() {
    if (validateRating()) {
        var rating = document.querySelector('input[name="rating"]:checked').value;
        alert(`Thank you for your ${rating}-star rating!`);
        
        // Reset form
        document.getElementById("ratingForm").reset();
        
        // Clear error messages
        document.getElementById("ratingError").innerHTML = "";
        document.getElementById("reviewError").innerHTML = "";
    }
}

// Utility functions for player
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function validateVolume(volume) {
    return Math.max(0, Math.min(100, volume));
}

function validatePlaybackPosition(position, duration) {
    return Math.max(0, Math.min(duration, position));
}

// Player error handling
function handlePlayerError(error) {
    console.error('Player error:', error);
    
    switch(error.code) {
        case 1:
            alert('Error: The audio file could not be loaded.');
            break;
        case 2:
            alert('Error: Network error while loading audio.');
            break;
        case 3:
            alert('Error: Audio file format not supported.');
            break;
        case 4:
            alert('Error: Audio file not found.');
            break;
        default:
            alert('Error: An unknown error occurred while playing audio.');
    }
}
