'use client';

import React, {useEffect, useState} from 'react';
import styles from '../page.module.css';
import BackButton from '@/components/BackButton';

const Activity = () => {
  const [activity, setActivity] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchActivity = async () => {
    try {
      setLoading(true);

      const response = await fetch('https://www.boredapi.com/api/activity');

      const data = await response.json();

      setActivity(data.activity);
      setLoading(false);

    } catch (error) {
      setLoading(false);
      console.log('Error fetching activity:', error);
    }
  };

  return (
    <div className={styles.data} >
      <BackButton />
      <h2>Activity</h2>

      {loading ? (
        <p>wait...</p>
      ) : (
        <p>{activity}</p>
      )}
    </div>
  );
};

export default Activity;
