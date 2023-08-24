import React, { useState, useEffect } from 'react';

const DogComponent = () => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    fetchDogImage();
  }, []);

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  const handleFetchNewDog = () => {
    fetchDogImage();
  };

  return (
    <div>
      <h1>Random Dog Image</h1>
      <img src={dogImage} alt="Random Dog" />
      <button onClick={handleFetchNewDog}>Fetch New Dog</button>
    </div>
  );
};

export default DogComponent;

