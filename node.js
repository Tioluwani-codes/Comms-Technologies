// Select the dark mode toggle element
const darkModeToggle = document.getElementById('darkModeToggle');

console.log(darkModeToggle);

// Add event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Update the toggle icon or text
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️'; // Light mode icon
    } else {
        darkModeToggle.textContent = '🌙'; // Dark mode icon
    }
});

