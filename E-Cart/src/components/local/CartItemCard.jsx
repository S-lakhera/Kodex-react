import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '@/features/cartSlice';
import { Trash2, Plus, Minus } from 'lucide-react'; // Using lucide-react for icons

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 bg-white p-4 mb-4 rounded-lg shadow-sm border border-gray-100 text-black">
      {/* Product Image */}
      <div className="w-24 h-24 shrink-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-contain" 
        />
      </div>

      {/* Product Details */}
      <div className="grow">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
        <p className="text-xs text-gray-500 capitalize mb-2">{item.category}</p>
        <p className="text-lg font-bold text-blue-600">${item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-full px-3 py-1 ">
        <button 
          onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}
          className="p-1 hover:text-blue-600 transition-colors"
          disabled={item.quantity <= 1}
        >
          <Minus size={16} />
        </button>
        
        <span className="font-medium min-w-5 text-center">{item.quantity}</span>
        
        <button 
          onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}
          className="p-1 hover:text-blue-600 transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Total for this Item */}
      <div className="w-24 text-right hidden sm:block">
        <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      {/* Delete Button */}
      <button 
        onClick={() => dispatch(removeItem(item.id))}
        className="text-gray-400 hover:text-red-500 transition-colors ml-2"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartItemCard;