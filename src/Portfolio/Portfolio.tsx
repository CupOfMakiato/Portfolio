import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
    return (
        
        <div className="portfolio rounded-2xl text-white p-6 text-center w-80 shadow-lg " >
            <div className="profile-image-container mb-4 mx-auto w-32 rounded-full border-2 border-dashed border-opacity-100">
                <img 
                src="https://makiato03.carrd.co/assets/images/image01.jpg?v=98278cc3" 
                alt="Profile" 
                className="w-32 rounded-full"
            />
            </div>
            
            <h2 className="text-2xl">@Makiato03</h2>
            <div className="profile-details mt-4">
                <p className="bg-black bg-opacity-0 p-2 rounded-md">A Drawer</p>
                <p className="bg-black bg-opacity-0 p-2 rounded-md">genderfluid / INTP-T / 20</p>
                <p className="bg-black bg-opacity-0 p-2 rounded-md">software major / vn</p>
                <p className="bg-black bg-opacity-0 p-2 rounded-md">PFP: @pop2hotzz</p>
                <p className="bg-black bg-opacity-0 p-2 rounded-md">Coffee and tea enthusiast &lt;3</p>
            </div>
            <p className="gallery mt-4">Click <a href="https://trello.com/b/HngEWbSO/commission-sheet" 
            className="text-yellow-300 hover:text-yellow-500 transition duration-300">here</a> for my art gallery!</p>
            
        </div>
    );
};

export default Portfolio;
