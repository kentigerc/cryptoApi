// Fetch cryptocurrency data from the API
function fetchCryptoData() {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => {
      // Extract Bitcoin price from the API response
      const btcPrice = data.bpi.USD.rate;

      // Update the Bitcoin price on the webpage
      const btcPriceElement = document.getElementById('btc-price');
      btcPriceElement.textContent = btcPrice;
    })
    .catch(error => {
      console.error('Error fetching cryptocurrency data:', error);
    });
}

// Function to initialize the webpage
function init() {
  fetchCryptoData(); // Fetch initial cryptocurrency data
  setInterval(fetchCryptoData, 60000); // Update data every minute (60000 milliseconds)
}

// Initialize the webpage when it's fully loaded
document.addEventListener('DOMContentLoaded', init);
