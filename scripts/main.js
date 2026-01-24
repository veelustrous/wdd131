/* js/main.js
   - Sets footer year & last modified
   - Calculates wind chill using metric formula
   - Only displays windchill if viability conditions are met
*/

document.addEventListener("DOMContentLoaded", () => {
  // Static values that match displayed content (for this assignment)
  const temperatureC = 8; // °C (static value shown on page)
  const windSpeedKmh = 10; // km/h (static value shown on page)

  // Display the static values in the DOM (in case HTML changed)
  document.getElementById("temp-val").textContent = temperatureC;
  document.getElementById("wind-val").textContent = windSpeedKmh;

  // calculateWindChill: one-line return using metric (°C) formula
  // Formula: 13.12 + 0.6215*T - 11.37 * V**0.16 + 0.3965 * T * V**0.16
  function calculateWindChill(tempC, speedKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16);
  }

  // Viability rules (metric):
  // Temp <= 10°C and wind speed > 4.8 km/h
  const windchillEl = document.getElementById("windchill-val");
  if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    const wc = calculateWindChill(temperatureC, windSpeedKmh);
    windchillEl.textContent = wc ? `${wc.toFixed(1)} °C` : "N/A";
  } else {
    windchillEl.textContent = "N/A";
  }

  // Footer: current year and document last modified
  document.getElementById("current-year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified || "Unknown";
});
