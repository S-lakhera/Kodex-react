
const Card = ({product,removeFromCart}) => {

    
    return (
        <div className=" rounded-xl px-4 md:px-10 py-5 shadow-[0_5px_15px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_15px_rgb(0,0,0,0.3)] hover:-mt-1 transition-all duration-300 cursor-pointer">
            <div className="overflow-hidden rounded-xl">
                <img src={product.image} alt="" className="rounded-xl  transition-scale duration-300  hover:scale-110" />
            </div>
            <h1 className="text-xl font-semibold mt-4 ">{product.name}</h1>


            <p className="text-green-300 font-semibold tracking-wider text-lg py-1">₹{product.price} </p>

            <div className="flex px-3 pt-1 items-center justify-center ">
                <button className="bg-white text-black px-3 rounded-lg py-2 text-md font-semibold cursor-pointer text-sm active:scale-90 transition-transform duration-100 hover:bg-white/80" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            </div>
        </div>
    );
}

export default Card;