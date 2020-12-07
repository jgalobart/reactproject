import React, { useState, useEffect } from 'react';

export default function About(props) {

    const [fruit, setFruit] = useState('banana');
    const [car, setCar] = useState('Maseratti');
    const [count, setCount] = useState(0);
    const [vegetable, setVegetable] = useState(props.text);

    useEffect(() => {
        // Update the document title using the browser API
        console.log('Effect!');
     });
    
  
    return (
      <>
        <h2>About</h2>
        <div>
          <p>La fruta es: {fruit}</p>
          <button onClick={() => setFruit('pineapple')}>
            Click me
          </button>
          <p>El coche es: {car}</p>
          <button onClick={() => setCar('Ferrari')}>
            Click me
          </button>
          <p>El contador es: {count}</p>
          <button onClick={() => setCount(count+1)}>
            Click me
          </button>
          <p>El texto es: {vegetable}</p>
          <button onClick={() => setVegetable('patata')}>
            Click me
          </button>
        </div>
      </>
    );
  
  }