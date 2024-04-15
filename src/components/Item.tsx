import React from 'react'
import { Product } from '../type/types';

interface ChildItem {
  product: Product;
  addToCart: (product: Product) => void;
  OnShowItem: (product: Product) => void;
}

const Item: React.FC<ChildItem> = ({ product, addToCart, OnShowItem }) => {
  return (
    <div className='item'>
      <img src={"./img" + product.image} alt={product.title} onClick={() => OnShowItem(product)} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <b>{product.price} $</b>
      <div className='add-to-cart' onClick={() => addToCart(product)} >+</div>
    </div>
  )
}

export default Item