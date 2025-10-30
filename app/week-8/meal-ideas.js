"use client";

import { useState, useEffect, use } from "react";

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        const data = await response.json();
        return data;
    }

    const loadMealIdeas = async () => {
        const data = await fetchMealIdeas(ingredient);
        setMeals(data.meals || []);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="font-bold text-xl">Meal Ideas with {ingredient}</h2>
            <ul className="flex flex-wrap">
                {meals.map(meal => (
                    <li className="bg-yellow-100 font-semibold border rounded-xl m-3 p-2 w-50" key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}