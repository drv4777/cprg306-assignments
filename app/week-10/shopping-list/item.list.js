"use client";
import Item from "./items";
import { useState } from "react";

export default function ItemList({items, onItemSelect}) {
  const [sortBy, setSortBy] = useState('name');
  let itemsData = [...items];

  if (sortBy === 'name') 
  {
    itemsData = [...items].sort((a,b)=> a.name.localeCompare(b.name));
  } 
  else if (sortBy === 'category') 
  {
    itemsData = [...items].sort((a,b)=> a.category.localeCompare(b.category));
  }

  let groupedItems = null;
  if (sortBy === "group") {
    const sortedCopy = [...items].sort((a, b) => {
      if (a.category === b.category) {
        return a.name.localeCompare(b.name);
      }
      return a.category.localeCompare(b.category);
    });

    groupedItems = sortedCopy.reduce((groups, item) => {
      const cat = item.category;
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(item);
      return groups;
    }, {});
  }

const handleClick = (value) => {
  if (sortBy !== value) {
    setSortBy(value);
  }
};

  return (
    <main>
      <div className="flex gap-2 w-100 mx-auto">
        <button className={`font-bold border rounded-xl p-4 ${sortBy == 'name' ? "bg-green-400" : "bg-slate-200"}`} onClick={() => handleClick("name")}>Sort By Name</button>
        <button className={`font-bold border rounded-xl p-4 ${sortBy == 'category' ? "bg-green-400" : "bg-slate-200"}`} onClick={() => handleClick("category")}>Sort By Category</button>
        <button className={`font-bold border rounded-xl p-4 ${sortBy == 'group' ? "bg-green-400" : "bg-slate-200"}`} onClick={() => handleClick("group")}>Group By Category</button>
      </div>
      <ul className="mt-4">
        {sortBy === "group" ? (
          Object.keys(groupedItems).map((category) => (
            <li key={category} className="bg-white text-black p-4 rounded-xl">
              <div className="border rounded-3xl w-fit mx-auto p-4 bg-yellow-100">
                <h2 className=" flex text-xl font-bold text-blue-600 capitalize mb-2 justify-center">
                  {category}
                </h2>
                <ul>
                  {groupedItems[category].map((item) => (<Item key={item.id} item={item} />))}
                </ul>
              </div>
            </li>
          ))) : (itemsData.map((item) => <Item key={item.id} item={item} onSelect={onItemSelect} />))}
      </ul>
    </main>
  );
}
