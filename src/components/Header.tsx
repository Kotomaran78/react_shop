import React, { useEffect, useRef, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6"
import Order from './Order'
import { Product } from 'src/type/types';

interface ChildHeder {
  orders: Product[]; // Список товаров в корзине
  removeFromCart: (productId: number) => void;
}

const Header: React.FC<ChildHeder> = ({ orders, removeFromCart }) => {
  // Состояние для открытия/закрытия корзины
  let [cartOpen, setCartOpen] = useState(false)

  // Функция для отображения списка товаров в корзине
  const ShowOrders = (orders: Product[]) => {
    let summa = 0
    orders.forEach(el => summa += el.price)
    return (
      <div>
        {orders.map(el => (
          <Order key={el.id} order={el} removeFromCart={removeFromCart} />
        ))}
        <p className='summa'>Сумма: {Math.floor(summa * 100) / 100} $</p>
      </div>
    )
  }
  
  // Функция для отображения сообщения о пустой корзине
  const showNothing = () => {
    return (
      <div className='empty'>
        <h2>Товаров нетъ</h2>
      </div>
    )
  }

  // Реф для доступа к DOM-элементу корзины
  const shopCartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Проверяем, находится ли клик вне элемента shopCartRef
      if (shopCartRef.current && !shopCartRef.current.contains(event.target as Node)) {
        // Закрываем shopCartRef
        setCartOpen(!cartOpen);
      }
    };

    // Добавляем обработчик события для клика на весь документ
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Удаляем обработчик события при размонтировании компонента
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartOpen]);

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaCartShopping onClick={() => setCartOpen(true)} className={`shop-cart-button ${cartOpen && 'activ'}`}/>
        {cartOpen && (
          <div className='shop-cart' ref={shopCartRef}>
            {orders.length > 0 ?
              ShowOrders(orders) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header