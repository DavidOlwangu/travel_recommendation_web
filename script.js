document.addEventListener("DOMContentLoaded", () => {

    //Clear search inputs
    window.clearInput = function () {
        const input = document.getElementById("searchCity");
        input.value = '';
        document.getElementById('results').innerHTML = '';
    }
});

// Handle contact form submission
const form = document.getElementById("contact-form");
const alertBox = document.getElementById("form-alert");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alertBox.classList.remove("hidden");
            form.reset();
        });
    }

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
      const input = document.getElementById("searchCity");

      input.addEventListener("input", () => {

        const value = input.value.trim().toLowerCase();
        results.innerHTML = '';

        if (!value) return; 
        
        data.countries.forEach(country => {
            country.cities.forEach(city => {
                if (city.name.toLowerCase().includes(value)) {
                    const card = document.createElement("div");
                    card.className = "result-card";
                    card.innerHTML = `
                        <img src="${city.imageUrl}" alt="${city.name}">
                        <h4>${city.name}</h4>
                        <p>${city.description}</p>
                    `;
                    results.appendChild(card);
                }
            });
        });
      })
      .catch(err => console.error("JSON load error:", err));
      
    });