import React from 'react';

// Definición del componente funcional ClickExample
const ClickExample = () => {
    return (
        <button
            onClick={() => {
                alert('¡Botón clickeado!');
            }}
            style={{ margin: '10px' }}
        >
            Click me
        </button>
    );
};

export default ClickExample;