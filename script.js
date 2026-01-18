// Scroll to next section
function scrollNext() {
  document.querySelector(".screen2").scrollIntoView({
    behavior: "smooth"
  });
}

// Set your mom's birthday here
// Format: new Date("YYYY-MM-DDTHH:MM:SS")
const birthday = new Date("2025-01-18T23:52:00");

// Update timer
function updateTimer() {
  const now = new Date();
  const diff = now - birthday;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Run every second
setInterval(updateTimer, 1000);
updateTimer();
