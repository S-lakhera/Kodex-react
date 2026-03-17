import Card from './Card.jsx';
import { useEffect } from 'react';

const Cart = ({ cart, setIsCartOpen,removeFromCart }) => {
    useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  // To close the modal when clicking the dark backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsCartOpen(false);
    }
  };

  return (
    <div 
      onClick={handleBackdropClick}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-1 selection:bg-black selection:text-white'
    >
      <div className='relative w-full max-w-4xl max-h-[98vh] min-h-[60vh] rounded-xl shadow-2xl overflow-hidden flex flex-col mx-5'>
        
        <div className='flex justify-between items-center p-2 mt-1  '>
          <h2 className='text-2xl font-bold '>Your Cart ({cart.length})</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className='text-gray-500 cursor-pointer  text-3xl font-light'
          >
            &times;
          </button>
        </div>

        <div className='flex-1 overflow-y-auto p-6 bg-[#262626] no-scrollbar '>
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
              {cart.map((product) => (
                <Card 
                key={product.id} 
                product={product}
                removeFromCart={removeFromCart} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              Your cart is empty.
            </div>
          )}
        </div>

        <div className='pt-2 flex justify-end'>
          <button 
             className='bg-white  cursor-pointer hover:bg-white/80 text-black px-8 py-2 rounded-lg font-semibold'
             onClick={() => alert("Proceeding to checkout...")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;