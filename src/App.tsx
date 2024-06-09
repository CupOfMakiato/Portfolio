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
                <a href="https://www.instagram.com/makiato03/" className="text-white mx-2 text-2xl transition duration-300">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://twitter.com/Makiato03" className="text-white mx-2 text-2xl transition duration-300">
                    <i className="bi bi-twitter"></i>
                </a>
                <a href="https://discordapp.com/users/makiato03" className="text-white mx-2 text-2xl transition duration-300">
                    <i className="bi bi-discord"></i>
                </a>
                </div>
        </div>
        </div>
    );
};

export default App;
