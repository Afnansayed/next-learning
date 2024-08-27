import Meals from '@/components/Meals/Meals';
import React from 'react';
import styles from './styles.module.css'
const mealsPage = () => {
    return (
        <div>
             <h1 className='text-3xl'>Meals Page  which is coming soon</h1>
             <h2 className={styles.text_size}>Meals are comming soon .......</h2>
             <Meals/>
        </div>
    );
};

export default mealsPage;