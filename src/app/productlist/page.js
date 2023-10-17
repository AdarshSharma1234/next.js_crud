"use client"

import { useEffect, useState } from "react";

export default function Page() {
    const [product, setProduct] = useState([]);

    const getCases = async () => {
        try {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            setProduct(data.products); // Use dot notation to access 'products'
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getCases();
    }, []);

    return (
        <div>
            <h1>go to product_list</h1>
            {product.map((item) => (
                <div>
                    <h2 key={item.id}>Price:{item.price}</h2>
                    <button onClick={()=>alert('mjgkrejgk')}>click me</button>
                </div>
                // You were missing parentheses here to return JSX

            ))}
        </div>
    );
}
