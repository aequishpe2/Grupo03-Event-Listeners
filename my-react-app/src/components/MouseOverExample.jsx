// MouseOverExample.jsx
import React, { useState } from 'react';

// Definición del componente funcional MouseOverExample
const MouseOverExample = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseOver={() => {
                setIsHovered(true);
            }}
            onMouseOut={() => {
                setIsHovered(false);
            }}
            style={{
                margin: '10px',
                padding: '10px',
                backgroundColor: isHovered ? '#000' : 'transparent',
            }}
        >
            Pasa el ratón sobre mí
        </div>
    );
};

export default MouseOverExample;