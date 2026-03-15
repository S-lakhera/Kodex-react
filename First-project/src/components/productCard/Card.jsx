
const Card = ({product,handleDelete}) => {

    
    return (
        <div className="w-2/7 rounded-xl px-10 py-5 shadow-[0_5px_15px_rgb(0,0,0,0.1)] hover:shadow-[0_10px_15px_rgb(0,0,0,0.2)] hover:-mt-1 transition-all duration-300 cursor-pointer">
            <div className="overflow-hidden rounded-xl">
                <img src={product.image} alt="" className="rounded-xl  transition-scale duration-300  hover:scale-110" />
            </div>
            <h1 className="text-3xl font-semibold py-5">{product.name}</h1>
            <p className="text-gray-400 font-semibold text-lg tracking-wider">{product.category}</p>
            <p className="text-green-300 font-semibold tracking-wider text-2xl py-4">₹{product.price} </p>
            <div className="flex-col flex md:flex-row gap-x-2 justify-between">
                <button className="bg-pink-900 px-5 rounded-lg my-2 py-2 text-md font-semibold cursor-pointer">Add to Cart</button>
                <button className="bg-pink-900 px-5 rounded-lg my-2 py-2 text-md font-semibold cursor-pointer" onClick={() => handleDelete(product.id)} >Delete</button>
            </div>
        </div>
    );
}

export default Card;