
const Card = ({product,handleDelete,addToCart}) => {

    
    return (
        <div className=" rounded-xl px-10 py-5 shadow-[0_5px_15px_rgb(0,0,0,0.2)] hover:shadow-[0_10px_15px_rgb(0,0,0,0.3)] hover:-mt-1 transition-all duration-300 cursor-pointer">
            <div className="overflow-hidden rounded-xl">
                <img src={product.image} alt="" className="rounded-xl  transition-scale duration-300  hover:scale-110" />
            </div>
            <h1 className="text-2xl font-semibold mt-4">{product.name}</h1>

            <p className="text-gray-400 font-semibold text-lg tracking-wider py-1">{product.category}</p>

            <p className="text-green-300 font-semibold tracking-wider text-2xl py-1">₹{product.price} </p>

            <div className="flex-col flex px-3 gap-x-3 justify-between">
                <button className="bg-white text-black px-3 rounded-lg my-2 py-2 text-md font-semibold cursor-pointer text-sm active:scale-90 transition-transform duration-100 hover:bg-white/80" onClick={() => addToCart(product.id)}>Add to Cart</button>
                <button className="bg-white text-black px-3 rounded-lg my-2 py-2 text-md font-semibold cursor-pointer text-sm active:scale-90 transition-transform duration-100 hover:bg-white/80" onClick={() => handleDelete(product.id)} >Delete</button>
            </div>
        </div>
    );
}

export default Card;