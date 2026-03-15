import Card from "../productCard/Card.jsx"
import data from "../../data/products.js";
import { useEffect, useState } from "react";

function Container() {
    const [products, setProducts] = useState(() => {

        const savedProducts = localStorage.getItem("myProducts");
        return savedProducts ? JSON.parse(savedProducts) : data
    })

    useEffect(() => {
        localStorage.setItem("myProducts", JSON.stringify(products));
    }, [products])

    const handleDelete = (id) => {
        let updatedProducts = products.filter((elem) => elem.id !== id)
        setProducts(updatedProducts)
    }
   
    return (
         products.length === 0 ? <h1 className="font-semibold text-4xl my-26">No Items to Show</h1> : <>
        <div className="container flex w-full flex-wrap justify-between py-8 px-10 gap-y-10 mt-17 ">
            {products.map((product) => (
                <Card key={product.id} product={product} handleDelete={handleDelete} />
            ))
            }
        </div>
    </>
    );
}

export default Container;