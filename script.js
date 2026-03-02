// Function to clear city search input field
function clearInput() {
    document.getElementById('searchCity').value = '';
}

// Handle contact form submission
const form = document.getElementById("contact-form");
const alertBox = document.getElementById("form-alert");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alertBox.classList.remove("hidden");
        form.reset();
    });

// Display current time in Nairobi, Kenya
const options = { 
    timeZone: 'Africa/Nairobi', 
    hour12: true, 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric' 
};
const nairobiKenya = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in Nairobi, Kenya:", nairobiKenya);

// Fetching travel data from JSON file
fetch("travel_api.json")
  .then(res => res.json())
  .then(data => {
      const results = document.getElementById("results");

      data.countries.forEach(country => {
        country.cities.forEach(city => {

            const img = document.createElement("img");
            img.src = city.imageUrl;
            img.style.width = "200px";

            results.appendChild(img);
        });
      });
  });