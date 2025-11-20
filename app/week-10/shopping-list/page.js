"use client";
import ItemList from "./item.list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const loadItems = async () => {
    if (user) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const cleanItemName = (rawName) => {
    return rawName
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
  };

  const handleAddItem = async (newItem) => {
    if (user) {
      const newId = await addItem(user.uid, newItem);
      
      const itemWithId = { ...newItem, id: newId };
      
      setItems([...items, itemWithId]);
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = cleanItemName(item.name);
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return (
      <div>
        <h1 className="text-4xl font-bold text-center"> Shopping List</h1>
        <p className="text-center mt-4 text-xl font-bold text-red-700">
          You must be signed in to access this page
        </p>
      </div>
    );
  }

  return (
    <main className="flex gap-10 p-10">
      <div className="flex flex-col w-1/2 mx-auto">
        <h1 className="text-4xl font-bold text-center">Shopping List</h1>
        <br />
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex flex-col w-1/2 mx-auto">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}