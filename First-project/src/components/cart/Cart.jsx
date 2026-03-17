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
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-1'
    >
      <div className='relative w-full max-w-6xl max-h-[98vh] rounded-xl shadow-2xl overflow-hidden flex flex-col'>
        
        {/* Header Section */}
        <div className='flex justify-between items-center p-3  '>
          <h2 className='text-2xl font-bold '>Your Cart ({cart.length})</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className='text-gray-500 cursor-pointer  text-3xl font-light'
          >
            &times;
          </button>
        </div>

        {/* Scrollable Products Area */}
        <div className='flex-1 overflow-y-auto p-6 bg-[#262626] no-scrollbar'>
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className='p-3 flex justify-end'>
          <button 
             className='bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold'
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