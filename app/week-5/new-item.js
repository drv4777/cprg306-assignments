"use client";
import {useState} from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
        else {
        }
    };

        const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        else {
  
        }
    };

 const handleSubmit = (e) => {
        e.preventDefault();
        let item = { name, quantity, category };
        console.log(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return(
            <form onSubmit={handleSubmit} className="border rounded-2xl p-4 m-4 flex flex-col gap-4 w-100 mx-auto bg-black text-white">
                <p className="text-center text-4xl font-bold mx-auto w-fit border-2 rounded p-2 my-4">{quantity}</p>
                <div className="flex gap-4 items-center justify-center">
                    <button type="button" disabled={quantity == 1} onClick={decrement} className="bg-blue-600 font-bold hover:bg-blue-700 active:bg-red-500 rounded p-2 w-10 text-white disabled:bg-gray-300 disabled:cursor-not-allowed">
                        -
                    </button>
                    <button type="button" disabled={quantity == 20} onClick={increment} className="bg-blue-600 font-bold hover:bg-blue-700 active:bg-green-500 rounded p-2 w-10 text-white disabled:bg-gray-300 disabled:cursor-not-allowed">
                        +
                    </button>

                </div>
                <div className="flex gap-2 items-center">
                    <label className="font-bold text-lg" htmlFor="name">Item Name:</label>
                    <input className=" border rounded p-2 text-white" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex gap-6.5 items-center">
                    <label className="font-bold text-lg" htmlFor="category">Category:</label>
                    <select className="bg-black border rounded p-2 text-white" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button className="bg-blue-400 font-bold hover:bg-blue-700 active:bg-green-500 rounded p-2 w-20 text-white mx-auto" onClick={() => alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`)}>
                    Add Item
                </button>
            </form>
    );
};