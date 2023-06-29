'use client';

import React, {useEffect, useState} from 'react';

import styles from '../page.module.css';
import BackButton from '@/components/BackButton';

const BitCoinPrice = () => {
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBitcoinPrice();
    }, []);

    const fetchBitcoinPrice = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
            const data = await response.json();
            setLoading(false);
            setPrice(data.bpi.USD.rate);
        } catch (error) {
            setLoading(false);
            console.log('Error fetching Bitcoin price:', error);
        }
    }

    return (
        <div className={styles.data} >
            <BackButton />
            <h2>Bitcoin Price</h2>
            {loading ? (
                <p>wait...</p>
            ) : (
                <p>USD rate: {price}$</p>
            )}

        </div>
    );
};

export default BitCoinPrice;
