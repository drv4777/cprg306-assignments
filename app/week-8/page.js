"use client"
import ItemList from "./item.list";
import NewItem from "./new-item";
import itemsData from "./item.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const cleanItemName = (rawName) => {
        return rawName.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    }

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (item) => {
        const cleanedName = cleanItemName(item.name);
        setSelectedItemName(cleanedName);
    }
    return (
        <main className="flex gap-10 p-10">
            <div className="flex flex-col w-1/2 mx-auto">
                <h1 className="text-4xl font-bold text-center">Shopping List</h1>
                <br />
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div className="flex flex-col w-1/2 mx-auto">
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    );
}