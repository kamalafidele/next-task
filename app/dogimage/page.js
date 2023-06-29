/* eslint-disable @next/next/no-img-element */
'use client';

import React, {useEffect, useState} from 'react';

import styles from '../page.module.css';
import BackButton from '@/components/BackButton';

const DogImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDogImage();
  }, []);

  const fetchDogImage = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setLoading(false);
      setImageUrl(data.message);
    } catch (error) {
      setLoading(false);
      console.log('Error fetching dog image:', error);
    }
  };

  return (
    <div className={styles.data}>
      <BackButton />
      <h2>Dog Image</h2>
      {loading ? (
        <p>wait...</p>
      ) : (
        <div className={styles.pic}>
            <img src={imageUrl} alt="Random Dog" />
        </div>
      )}
    </div>
  );
};

export default DogImage;
