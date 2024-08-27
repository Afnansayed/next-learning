'use client'
import React, { useEffect, useState } from 'react';
import error from './../../app/error';
import Image from 'next/image';

const Meals = () => {
    const [search,setSearch] = useState('a');
    const [meals,setMeals] = useState([]);
    const [error,setError] = useState('');

    const loadData = async () => {
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data = await res.json();
            console.log(data)
            setMeals(data.meals || []);
        }catch(err){
            console.log(err.message)
            setError('No data found');
        }
    }

    const searchHandler = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value);
    }

    useEffect(() => {
        loadData();
    },[search])
    return (
        <div>
            <div className='mt-6'>
                <input onChange={searchHandler} type="text" placeholder='Search...' className='border p-2 ' />
                <button className='bg-orange-500 text-white px-6 py-2'>Search</button>
             </div>

             <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                  meals?.length > 0 &&  meals.map(meal => <div key={meal.idMeal}>
                        <Image src={meal.strMealThumb} alt={meal.strMeal} width={300} height={300}/>
                        <h1>{meal.strMeal}</h1>
    
                    </div>)
                }
                {
                    meals.length === 0 && <h1>{error}</h1>
                }
             </div>
        </div>
    );
};

export default Meals;