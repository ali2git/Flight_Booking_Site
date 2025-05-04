document.addEventListener("DOMContentLoaded", function () {
  const destinationInput = document.getElementById("destination");
  const suggestionsBox = document.getElementById("suggestions");

  const cities = ["Kathmandu", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Dubai", "Singapore"];

  destinationInput.addEventListener("input", function () {
    const input = this.value.toLowerCase();
    suggestionsBox.innerHTML = "";
    if (input.length === 0) {
      suggestionsBox.style.display = "none";
      return;
    }

    const matches = cities.filter(city => city.toLowerCase().startsWith(input));
    if (matches.length > 0) {
      matches.forEach(city => {
        const div = document.createElement("div");
        div.textContent = city;
        div.addEventListener("click", function () {
          destinationInput.value = city;
          suggestionsBox.innerHTML = "";
          suggestionsBox.style.display = "none";
        });
        suggestionsBox.appendChild(div);
      });
      suggestionsBox.style.display = "block";
    } else {
      suggestionsBox.style.display = "none";
    }
  });

  document.addEventListener("click", function (e) {
    if (!destinationInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.style.display = "none";
    }
  });

  const form = document.querySelector(".booking-box");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const from = form.querySelector('input[value="Delhi (DEL)"]').value;
    const to = destinationInput.value;
    const date = form.querySelector('input[type="date"]').value;
    const passengers = form.querySelector('input[type="number"]').value;

    if (!to || !date) {
      alert("Please fill in all fields before searching for flights.");
      return;
    }

    alert(`Searching flights from ${from} to ${to} on ${date} for ${passengers} passenger(s)...`);
  });
});
