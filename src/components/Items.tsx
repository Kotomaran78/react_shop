import React from 'react'
import Item from './Item';
import { Product } from 'src/type/types';

interface ChildItems {
  products: Product[];
  addToCart: (product: Product) => void;
  OnShowItem: (product: Product) => void;
}

const Items: React.FC<ChildItems> = ({ products, addToCart, OnShowItem }) => {
  return (
    <main>
      {products.map(el => (
          <Item key={el.id} product={el} addToCart={addToCart} OnShowItem={OnShowItem} />
        ))}
    </main>
  )
}

export default Items