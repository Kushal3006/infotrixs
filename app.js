var map = L.map('temperatureMap').setView([18.5204, 73.8567],5); // Set initial coordinates and zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
var marker = L.marker([18.5204, 73.8567]).addTo(map); // Add a marker at a specific location

