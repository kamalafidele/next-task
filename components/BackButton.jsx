'use client';

import React from 'react';
import {useRouter} from 'next/navigation';

import styles from '../app/page.module.css';

const BackButton = () => {
    const router = useRouter();
    const handleClick = () => {
        router.back();
    };
    return (
        <div className={styles.btn} >
            <button onClick={handleClick}>Back</button>
        </div>
    );
};

export default BackButton;