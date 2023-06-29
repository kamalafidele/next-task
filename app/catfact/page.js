'use client';


import React, {useEffect, useState} from 'react';

import styles from '../page.module.css';
import BackButton from '@/components/BackButton';

const CatFact = () => {
    const [fact, setFact] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCatFact();
    }, []);

    const fetchCatFact = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();
            setLoading(false);
            setFact(data.fact);
        } catch (error) {
            setLoading(false);
            console.log('Error fetching cat fact:', error);
        }
    };

    return (
        <div className={styles.data} >
            <BackButton />
            <h2>Cat Fact</h2>

            {loading ? (
                <p>wait...</p>
            ) : (
                <p>{fact}</p>
            )}

        </div>
    );
};

export default CatFact;
