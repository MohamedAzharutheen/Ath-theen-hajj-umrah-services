// src/components/Timeline.js
import React, { useState, useEffect } from 'react';
import { Chrono } from 'react-chrono';
import './Timeline.css';

const Timeline = () => {
    const [mode, setMode] = useState('HORIZONTAL');

    useEffect(() => {
        const updateMode = () => {
            if (window.innerWidth < 768) {
                setMode('VERTICAL');
            } else {
                setMode('HORIZONTAL');
            }
        };

        window.addEventListener('resize', updateMode);
        updateMode(); // Initial mode check

        return () => window.removeEventListener('resize', updateMode);
    }, []);

    const items = [
        {
            title: 'Start of Hajj',
            cardTitle: 'Beginning of the Pilgrimage',
            cardSubtitle: 'The pilgrimage begins with the intention to perform Hajj.',
            cardDetailedText: 'Pilgrims enter into the sacred state of Ihram, preparing for the journey ahead.',
            media: {
                type: 'image',
                source: {
                    url: 'https://example.com/start_of_hajj.gif', // Replace with your GIF URL
                },
            },
        },
        {
            title: 'Ihram',
            cardTitle: 'Entering Ihram',
            cardSubtitle: 'Pilgrims don the Ihram clothing.',
            cardDetailedText: 'Pilgrims put on the simple white garments symbolizing purity and unity.',
            media: {
                type: 'image',
                source: {
                    url: 'https://example.com/ihram.gif', // Replace with your GIF URL
                },
            },
        },
        {
            title: 'Tawaf',
            cardTitle: 'Performing Tawaf',
            cardSubtitle: 'Circling the Kaaba.',
            cardDetailedText: 'Pilgrims perform Tawaf, circling the Kaaba seven times.',
            media: {
                type: 'image',
                source: {
                    url: 'https://example.com/tawaf.gif', // Replace with your GIF URL
                },
            },
        },
        // Add more items with GIFs
    ];

    return (
        <div className="timeline-container">
            <h1>Hajj Guidance Timeline</h1>
            <Chrono
                items={items}
                mode={mode}
                theme={{
                    primary: '#3F51B5',
                    secondary: '#F50057',
                    cardBgColor: '#fff',
                    cardForeColor: '#333',
                }}
                cardHeight={200}
            />
            <style jsx>
                {`
                /* src/components/Timeline.css */

/* Container for the entire timeline */
.timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: #f5f5f5;
}

/* Style for the header */
h1 {
    margin-bottom: 20px;
    color: #333;
    font-size: 2rem;
    text-align: center;
}

/* Flexbox for each card in the timeline */
.chrono-card {
    display: flex;
    flex-direction: row; /* Side-by-side for larger screens */
    justify-content: flex-start;
    margin-bottom: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* Style for images/GIFs */
.chrono-card img {
    width: 200px; /* Set a default width for images/GIFs */
    height: auto;
    border-radius: 5px;
    object-fit: cover; /* Ensure the image fits within the dimensions */
    margin-right: 20px;
}

/* Style for the card's content */
.chrono-card h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.chrono-card p {
    font-size: 1rem;
    color: #555;
}

/* Make the cards stack vertically for smaller screens */
@media (max-width: 768px) {
    .chrono-card {
        flex-direction: column; /* Stack image and content vertically */
        align-items: center;
        text-align: center;
    }

    .chrono-card img {
        width: 100%; /* Make the image/GIF take up the full width */
        margin-right: 0;
        margin-bottom: 10px; /* Add margin below the image for spacing */
    }

    .chrono-card h2 {
        font-size: 1.5rem; /* Adjust heading size for smaller screens */
    }

    .chrono-card p {
        font-size: 0.9rem; /* Slightly smaller text on mobile */
    }
}

                
                `}
            </style>
        </div>
    );
};

export default Timeline;
