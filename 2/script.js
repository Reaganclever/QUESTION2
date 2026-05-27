// script.js

// Array of image URLs (you can add more images)
const images = [
'image1.jpg',
'image2.jpg',
'image3.jpg',
'image4.jpg'    
];

let currentIndex = 0;           // Track current image
let autoSlideInterval;          // To store interval ID

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to display current image
function showSlide(index) {
    sliderImage.style.opacity = 0;           // Fade out

    setTimeout(() => {
        sliderImage.src = images[index];
        sliderImage.style.opacity = 1;       // Fade in
    }, 300); // Small delay for smooth transition
}

// Next Slide Function
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;  // Loop back to start
    showSlide(currentIndex);
}

// Previous Slide Function
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to end
    showSlide(currentIndex);
}

// Start Automatic Sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Every 3 seconds
}

// Stop Automatic Sliding (optional - if needed)
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event Listeners for Buttons
prevBtn.addEventListener('click', () => {
    stopAutoSlide();     // Pause auto when user clicks
    prevSlide();
    startAutoSlide();    // Restart auto
});

nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

// Initialize Slider
function initSlider() {
    showSlide(currentIndex);     // Show first image
    startAutoSlide();            // Start auto sliding
}

// Start the slider when page loads
window.onload = initSlider;