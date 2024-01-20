// InputExample.jsx

import React, { useState } from 'react';

// Definición del componente funcional InputExample
const InputExample = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value);
            }}
            placeholder="Escribe algo"
            style={{ margin: '10px' }}
        />
    );
};

export default InputExample;