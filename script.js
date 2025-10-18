// Get the button element
var button = document.getElementById('welcome-btn');

// Add click event listener to the button
button.addEventListener('click', function() {
    alert('Hey! Thanks for visiting my website!');
});

// Get the profile picture element
var profilePic = document.getElementById('profile-pic');

// Change background color when mouse hovers over the profile picture
profilePic.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = '#ffe6e6';
});

// Change background color back when mouse leaves the profile picture
profilePic.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = '#f0f8ff';
});
