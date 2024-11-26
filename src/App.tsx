import React from 'react';
import Portfolio from './Portfolio/Portfolio';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // bootstrap icons

const App: React.FC = () => {
    return (
        <div className="stars">
            <div className="App">
                <Portfolio />
                <div className="social-links mt-4 flex justify-center shadow-lg p-3 rounded-2xl">
                    
                    <a href="https://www.instagram.com/makiato03/" className="text-white mx-2 text-2xl transition duration-300 hover:text-yellow-300">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://twitter.com/Makiato03" className="text-white mx-2 text-2xl transition duration-300 hover:text-yellow-300">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://discordapp.com/users/makiato03" className="text-white mx-2 text-2xl transition duration-300 hover:text-yellow-300">
                        <i className="bi bi-discord"></i>
                    </a>
                    <a href="https://bsky.app/profile/iceblueberrytea.bsky.social" className="text-white mx-2 text-2xl transition duration-300 hover:text-yellow-300">
                    <svg
                        className="w-6 h-6 align-middle mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 600 530"
                        fill="currentColor">
                          <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
                    </svg>
                    </a>
                    <a href="https://github.com/CupOfMakiato" className="text-white mx-2 text-2xl transition duration-300 hover:text-yellow-300">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
                <div className="flex items-center justify-center h-full">
                    <p className="p-1 rounded-md font-semibold text-white">Last Updated 11/26/2024</p>
                </div>      
            </div>
        </div>
    );
};

export default App;
