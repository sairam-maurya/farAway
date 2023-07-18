import { useState } from "react";

export default function Form({ onAddItems }) {
    const [inputItems, setInputItems] = useState({
        description: "",
        quantity: 1,
        packed: false,
        id: Date.now()
    });


    function handelSumbit(e) {
        e.preventDefault();
        if (!inputItems.description) return;
        // const newItem = { description, quantity, packed: false, id: Date.now() };
        // console.log(newItem);
        onAddItems(inputItems);

        setInputItems("");
    }

    function handelInput(key, value) {
        setInputItems((pre) => ({
            ...pre, [key]: value
        }))

    }

    return (
        <form className="add-form" onSubmit={handelSumbit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select
                value={inputItems.quantity}
                onChange={(e) => handelInput("quantity", e.target.value)}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item.."
                value={inputItems.description}
                onChange={(e) => handelInput("description", e.target.value)}
            />

        </form>
    );
}