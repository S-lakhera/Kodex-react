import Card from "../productCard/Card.jsx"
import data from "../../data/products.js";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar.jsx";
import Cart from "../modal/Cart.jsx";

function Container() {
    const [products, setProducts] = useState(() => {

        const savedProducts = localStorage.getItem("myProducts");
        return savedProducts ? JSON.parse(savedProducts) : data
    })
    const [isOpen, setIsOpen] = useState(false);

    const [cart, setCart] = useState(() => {
        const cartArr = localStorage.getItem("cart");
        return cartArr? JSON.parse(cartArr): [];
    })

    const addToCart = (id) => {
        let product = products.find((item) => item.id === id)
        let updatedCart = [...cart]
        updatedCart.push(product)
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart))
    }
    
    const removeFromCart = (id) => {
        let updatedCart = cart.filter((item) => item.id !== id)
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        
    }

    useEffect(() => {
        localStorage.setItem("myProducts", JSON.stringify(products));
    }, [products])

    const handleDelete = (id) => {
        let updatedProducts = products.filter((elem) => elem.id !== id)
        localStorage.setItem("cart",JSON.stringify(updatedProducts))
    }

    return (
        <>
            <Navbar setIsOpen={setIsOpen} />

            {products.length === 0 && <h1 className="font-semibold text-4xl my-26">No Items to Show</h1>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-between py-8 px-5 md:px-15   gap-12 mt-13 ">

                {products.map((product) => (
                    <Card
                        key={product.id}
                        product={product}
                        handleDelete={handleDelete}
                        addToCart={addToCart}
                    />
                ))
                }
            </div>
            {isOpen === true &&
                <Cart
                    cart={cart}
                    setIsOpen={setIsOpen}
                    removeFromCart={removeFromCart}
                />
            }
        </>
    );
}

export default Container;