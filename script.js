
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;
  const passengers = document.getElementById("passengers").value;

  if (!from || !to || !date) {
    alert("Please fill in all fields!");
    return;
  }

  alert(`Searching flights from ${from} to ${to} on ${date} for ${passengers} passenger(s).`);
});
