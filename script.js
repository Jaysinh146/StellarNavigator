// Orbital speeds (deg/frame)
const orbitalSpeeds = {
    asteroid: 0.1
  };
  
  // Initial asteroid angles
  let asteroidAngle = 0;
  
  // NASA API Key 
  const NASA_API_KEY = 'Iiu6P7e0NHR3YXl2uzVuVKFQQTWRt4TbAL6AKxaA';  
  // Fetch Data from NASA API
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${NASA_API_KEY}`);
      const data = await response.json();
      displayAsteroids(data.near_earth_objects);
    } catch (error) {
      console.error("Error fetching NASA data:", error);
      alert("Failed to fetch data from NASA.");
    }
  };
  
  // Display Asteroids in Orbit
  const displayAsteroids = (asteroids) => {
    const asteroidContainer = document.getElementById('asteroid-orbits');
    asteroidContainer.innerHTML = '';  // Clear existing orbits
  
    asteroids.slice(0, 5).forEach((asteroid, index) => {
      // Create orbit for each asteroid
      const orbitDiv = document.createElement('div');
      orbitDiv.classList.add('orbit');
      orbitDiv.style.width = `${300 + index * 50}px`;
      orbitDiv.style.height = `${300 + index * 50}px`;
  
      // Create asteroid
      const asteroidDiv = document.createElement('div');
      asteroidDiv.classList.add('planet');
      asteroidDiv.style.width = '15px';
      asteroidDiv.style.height = '15px';
      asteroidDiv.style.backgroundColor = 'grey';
      asteroidDiv.id = `asteroid-${index}`;
  
      orbitDiv.appendChild(asteroidDiv);
      asteroidContainer.appendChild(orbitDiv);
    });
  };
  
  // Update orbit animation
  const updateOrbit = () => {
    // Move asteroids
    document.querySelectorAll('[id^="asteroid-"]').forEach((asteroid, index) => {
      asteroidAngle += orbitalSpeeds.asteroid;
      asteroid.style.transform = `translate(-50%, -50%) rotate(${asteroidAngle + index * 10}deg) translateX(150px)`;
    });
  };
  
  // Animate the orrery
  const animateOrrery = () => {
    updateOrbit();
    requestAnimationFrame(animateOrrery);
  };
  
  // Fetch data on page load
  fetchData();
  
  // Start animation
  animateOrrery();
  