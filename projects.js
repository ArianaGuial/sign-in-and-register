// User Profile Dropdown
document.getElementById('user-icon').addEventListener('click', function() {
    var userDropdown = document.getElementById('user-dropdown');
    // Toggle the dropdown visibility
    if (userDropdown.style.display === 'none' || userDropdown.style.display === '') {
        userDropdown.style.display = 'block';
    } else {
        userDropdown.style.display = 'none';
    }
});

// Close the dropdown if the user clicks anywhere outside of the user icon
window.addEventListener('click', function(event) {
    var userDropdown = document.getElementById('user-dropdown');
    var userProfile = document.getElementById('user-profile');
    if (!userProfile.contains(event.target)) {
        userDropdown.style.display = 'none';
    }
});

// Handle Sign-Out button click
document.getElementById('sign-out-btn').addEventListener('click', function() {
    // Optionally, redirect to the home page or login page
    window.location.href = 'signin.html';  // Example redirect
});