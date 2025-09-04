//your JS code here. If required.
// Utility: set a cookie
function setCookie(name, value, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

// Utility: get a cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) return val;
  }
  return null;
}

// Apply preferences to page
function applyPreferences() {
  const fontsize = getCookie("fontsize") || "16px";
  const fontcolor = getCookie("fontcolor") || "#000000";

  document.documentElement.style.setProperty("--fontsize", fontsize);
  document.documentElement.style.setProperty("--fontcolor", fontcolor);

  // also update the form values
  document.getElementById("fontsize").value = parseInt(fontsize, 10);
  document.getElementById("fontcolor").value = fontcolor;
}

// Handle form submit
document.getElementById("preferencesForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const fontsize = document.getElementById("fontsize").value + "px";
  const fontcolor = document.getElementById("fontcolor").value;

  // Save to cookies
  setCookie("fontsize", fontsize);
  setCookie("fontcolor", fontcolor);

  // Apply immediately
  applyPreferences();
});

// On page load
applyPreferences();
