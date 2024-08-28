import Meals from '@/components/Meals/Meals';
import React from 'react';
import styles from './styles.module.css'
import { Hanalei_Fill } from 'next/font/google';


const handleFill = Hanalei_Fill({weight: ['400'] , subsets: ['latin']});
const mealsPage = () => {
    return (
        <div className={handleFill.className}>
             <h1 className={`text-3xl`}>Meals Page  which is coming soon</h1>
             <h2 className={styles.text_size}>Meals are comming soon .......</h2>
             <Meals/>
        </div>
    );
};

export default mealsPage;