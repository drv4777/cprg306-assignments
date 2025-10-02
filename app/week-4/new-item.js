"use client";
import {useState} from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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

    return(
        <div className="border rounded-2xl p-4 m-4 flex flex-col gap-4 w-100 mx-auto bg-black text-white">
            <p className="text-center text-4xl font-bold mx-auto w-fit border-2 rounded p-2 my-4">{quantity}</p>           
            <div className="flex gap-4 items-center justify-center">
                <button disabled={quantity == 1} onClick={decrement} className="bg-blue-600 font-bold hover:bg-blue-700 active:bg-red-500 rounded p-2 w-10 text-white disabled:bg-gray-300 disabled:cursor-not-allowed">
                    -
                </button>
                <button disabled={quantity == 20} onClick={increment} className="bg-blue-600 font-bold hover:bg-blue-700 active:bg-green-500 rounded p-2 w-10 text-white disabled:bg-gray-300 disabled:cursor-not-allowed">
                    +
                </button>
            </div>
        </div>
    );

}