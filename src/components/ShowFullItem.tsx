import React, { useEffect, useRef } from 'react'
import { Product } from 'src/type/types';

interface ChildShowFullItem {
  fullItem: Product;
  addToCart: (product: Product) => void;
  OnShowItem: (product: Product) => void;
}

const ShowFullItem: React.FC<ChildShowFullItem> = ({ fullItem, addToCart, OnShowItem }) => {
  const fullItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Проверяем, находится ли клик вне элемента fullItem
      if (fullItemRef.current && !fullItemRef.current.contains(event.target as Node)) {
        // Закрываем fullItem
        OnShowItem({} as Product);
      }
    };

    // Добавляем обработчик события для клика на весь документ
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Удаляем обработчик события при размонтировании компонента
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [OnShowItem]);

  return (
    <div className='full-item' >
      <div ref={fullItemRef}>
        <img src={"./img" + fullItem.image} alt={fullItem.title} />
        <h2>{fullItem.title}</h2>
        <p>{fullItem.description}</p>
        <b>{fullItem.price} $</b>
        <div className='add-to-cart' onClick={() => addToCart(fullItem)} >+</div>
      </div>
    </div>
  )
}

export default ShowFullItem