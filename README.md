Stellar Navigator
An interactive orrery web application powered by real-time NASA data, designed to visualize celestial bodies such as planets, Near-Earth Asteroids (NEAs), Near-Earth Comets (NECs), and Potentially Hazardous Asteroids (PHAs). The goal is to provide an educational, visually engaging, and interactive model of the solar system, using accurate orbital data fetched directly from NASA's APIs.

Live Demo
Access the live demo of the Stellar Navigator here 

Features
1. Interactive 3D visualization of the solar system with the Sun, planets, and asteroids.
2. Real-time fetching of orbital data from NASA’s Near-Earth Object (NEO) database.
3. Display the orbits of asteroids, comets, and planets.
4. Animations that simulate the movement of celestial bodies in space.
5. Auto-updated with the latest positions of Near-Earth Objects (NEOs) through NASA's API.

Technologies Used
HTML5: Structure and layout of the orrery.
CSS3: Styling and orbit designs.
JavaScript: Core logic for animation, fetching NASA data, and rendering orbits.
NASA API: Fetching real-time data for Near-Earth Objects.

Project Setup
1. Clone the Repository
   git clone https://github.com/jaysinh146/stellar-navigator.git

2. Navigate to the Project Directory
   cd stellar-navigator

3. Open the Project
Open the index.html file in your preferred web browser.

NASA API Key
This project uses NASA's Near-Earth Object (NEO) API to fetch real-time data of asteroids and other celestial objects. The API key is embedded in the JavaScript code.

Important: The NASA API key is hardcoded into the project for ease of access. However, it's highly recommended to protect your API key in production by using a server-side implementation or environmental variables.

Usage
1. Fetching Real-Time NASA Data
Stellar Navigator automatically fetches data from NASA's Near-Earth Object (NEO) API. You don’t need to enter an API key manually; it is integrated into the code.

2. Solar System Simulation
The orrery displays the Sun at the center, with planets and asteroids orbiting around it.
Asteroids’ positions are updated in real-time based on the NASA data.
The movement of celestial bodies is animated to simulate their orbits.

Folder Structure
stellar-navigator/
│
├── index.html          # Main HTML file
├── style.css           # Styles for the orrery
├── script.js           # JavaScript logic for animation and data fetching
└── README.md           # Project documentation

We welcome contributions to Stellar Navigator! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

Future Enhancements
Dynamic UI Controls: Allow users to adjust the speed of animations or switch between different celestial body views.
Enhanced 3D Graphics: Implement more advanced 3D graphics with WebGL for a richer visual experience.
Mobile Responsiveness: Improve the user interface for better compatibility on mobile devices.
Additional NASA APIs: Integrate data for more celestial bodies, such as distant comets, exoplanets, or spacecraft orbits.

Credits
NASA for the incredible open data APIs.
This project was developed as part of the NASA Space Apps Challenge.
Feel free to fork, modify, and expand on this project! Happy coding! 😊

Contact
If you have any questions, feel free to reach out:

Email: patankararyan7@gmail.com
GitHub: @Jaysinh146

Stellar Navigator is an open-source project aimed at bringing the wonders of space exploration closer to everyone. 🌌

