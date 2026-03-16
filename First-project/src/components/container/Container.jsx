import Card from "../productCard/Card.jsx"
import data from "../../data/products.js";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar.jsx";

function Container() {
    const [products, setProducts] = useState(() => {

        const savedProducts = localStorage.getItem("myProducts");
        return savedProducts ? JSON.parse(savedProducts) : data
    })

    const cart = localStorage.getItem("cart");
    const cartArr = cart ? JSON.parse(cart) : []

    const updateCart = (id) => {
        let product = products.find((item) => item.id === id)
        cartArr.push(product)
        localStorage.setItem("cart", JSON.stringify(cartArr))
        console.log(cartArr);
    }


    useEffect(() => {
        localStorage.setItem("myProducts", JSON.stringify(products));
    }, [products])

    const handleDelete = (id) => {
        let updatedProducts = products.filter((elem) => elem.id !== id)
        setProducts(updatedProducts)
    }

    return (
        <>
            <Navbar/>

            {products.length === 0 && <h1 className="font-semibold text-4xl my-26">No Items to Show</h1>}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-between py-8 px-5 md:px-15   gap-12 mt-13 ">

                {products.map((product) => (
                    <Card 
                    key={product.id} 
                    product={product} 
                    handleDelete={handleDelete} u
                    pdateCart={updateCart} />
                ))
                }
            </div>
        </>
    );
}

export default Container;