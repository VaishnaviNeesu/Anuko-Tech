
// Select all the control buttons and sections
console.log("working");
const sectBtns = document.querySelectorAll('.control');
const sections = document.querySelectorAll('.section');

// Function to handle button clicks and section transitions
function pageTransitions() {
    // Handle navigation buttons
    sectBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove the active class from all buttons
            sectBtns.forEach(button => {
                button.classList.remove('active-btn');
                button.style.backgroundColor = 'rgb(47, 154, 154)'; // Reset to initial color
            });

            // Add active state to the clicked button
            this.classList.add('active-btn');
            this.style.backgroundColor = 'white'; // Active button background

            // Remove active class from all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Get the target section ID from the clicked button's data-id
            const targetId = this.dataset.id;

            // Show the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Handle "Anuko Tech" heading click
    const logoHeading = document.querySelector('.logo h1');
    if (logoHeading) {
        logoHeading.addEventListener('click', () => {
            // Navigate to the home section
            window.location.href = 'index.html'; // Replace with your home page path
        });
    }
}

// Initialize transitions
function initApp() {
    pageTransitions();
    // Once app.js is done, signal that it is ready
    document.dispatchEvent(new Event('appReady'));
}

// Initialize app.js functionality
initApp();
