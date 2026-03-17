import Card from "../productCard/Card.jsx"
import data from "../../data/products.js";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar.jsx";
import Cart from "../cart/Cart.jsx";
import Auth from "../auth/Auth.jsx";

function Container() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [products, setProducts] = useState(() => {

        const savedProducts = localStorage.getItem("myProducts");
        return savedProducts ? JSON.parse(savedProducts) : data
    })

    useEffect(() => {
        localStorage.setItem("myProducts", JSON.stringify(products));
    }, [products])

    const handleDelete = (id) => {
        let confirmation = confirm("This item will be deleted")
        if (confirmation) {
            let updatedProducts = products.filter((elem) => elem.id !== id)
            setProducts(updatedProducts)
        }
    }

    const [cart, setCart] = useState(() => {
        const cartArr = localStorage.getItem("cart");
        return cartArr ? JSON.parse(cartArr) : [];
    })

    const addToCart = (id) => {
        let product = products.find((item) => item.id === id)
        setCart([...cart, product]);
    }

    const removeFromCart = (id) => {
        let updatedCart = cart.filter((item) => item.id !== id)
        setCart(updatedCart)
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])



    return (
        <>
            <Navbar
                setIsCartOpen={setIsCartOpen}
                setIsFormOpen={setIsFormOpen}
            />

            {products.length === 0 && <h1 className="font-semibold text-4xl my-26">No Items to Show</h1>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between py-8 px-5 md:px-20 xl:px-10  gap-10 md:gap-15 xl:gap-10  mt-13 ">

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

            {isCartOpen &&
                <Cart
                    cart={cart}
                    setIsCartOpen={setIsCartOpen}
                    removeFromCart={removeFromCart}
                />
            }

            <div className={isFormOpen ? "visible" : "hidden"}>
                <Auth
                    setIsFormOpen={setIsFormOpen}
                />
            </div>
            
        </>
    );
}

export default Container;