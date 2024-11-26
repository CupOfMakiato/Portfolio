import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio rounded-2xl text-white p-6 text-center w-80 shadow-lg">
            <div className="profile-image-container mb-4 mx-auto w-32 rounded-full">
                <div className="tooltip-delayed tooltip">Art by me!</div>
                <img 
                    src="https://trello.com/1/cards/6734c45dbf1ead63e152287d/attachments/6734c45eb69242987ba4809f/previews/6734c460b69242987ba480ac/download/image.webp" 
                    alt="Profile" 
                    className="w-32 rounded-full border-opacity-20 custom-border"
                />
                
            </div>
            <h2 className="text-2xl relative inline-block">
        <span className="bg-gray-100 bg-opacity-10 rounded-lg px-2 py-1">
            @Makiato03
        </span>
            </h2>
            <div className="profile-details mt-4">
                <p className="p-1 rounded-md">Hobbyist Artist!</p>
                <p className="p-1 rounded-md">Genderfluid / 21</p>             
                <p className="p-1 rounded-md">Software Engineer Student / VN </p>
                <p className="p-1 rounded-md">Coffee and tea enthusiast &lt;3</p>
            </div>
            <p className="gallery mt-4">Click <a href="https://trello.com/b/HngEWbSO/commission-sheet" 
                className="text-yellow-300 hover:text-yellow-500 transition duration-300">here</a> for my art gallery!
            </p>
        </div>
    );
};

export default Portfolio;
