// script.js
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const productList = document.querySelector('.product-list');

// Sample list of products (shoes and clothes)
const products = [
    "Running Shoes",
    "High Heels",
    "Sneakers",
    "Jeans",
    "T-Shirts",
    "Dresses",
    "Socks",
    "Jackets"
];

// Function to filter and display search results
function displayResults(searchText) {
    const filteredProducts = products.filter(product => product.toLowerCase().includes(searchText.toLowerCase()));

    const resultsHTML = filteredProducts.map(product => `<p>${product}</p>`).join('');
    searchResults.innerHTML = resultsHTML;
}

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value;
    displayResults(searchText);
});

// Initialize with all products
displayResults('');
// Set the target date for the offer (in this case, one week from the current date)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7);

function updateCountdown() {
    const currentDate = new Date();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        // Offer has ended
        document.getElementById("timer").innerHTML = "<span>00</span><span>00</span><span>00</span><span>00</span>";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to avoid a 1-second delay in updating the countdown
updateCountdown();
