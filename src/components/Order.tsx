import React from 'react'
import { FaTrash } from 'react-icons/fa6';
import { Product } from 'src/type/types';

interface ChildOrder {
  order: Product;
  removeFromCart: (productId: number)  => void;
}

const Order: React.FC<ChildOrder> = ({ order, removeFromCart }) => {
  return (
    <div className='item'>
      <img src={"./img" + order.image} alt={order.title} />
      <h2>{order.title}</h2>
      <p>{order.price} $</p>
      <FaTrash className='delete-icon' onClick={() => removeFromCart(order.id)} />
    </div>
  )
}

export default Order