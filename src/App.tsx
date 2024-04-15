import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import { Product } from './type/types';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';


const App: React.FC = () => {
  // Список всех продуктов
  const products: Product[] =[
    {
      "id": 1,
      "image": "/chair1.jpg",
      "title": "Синее кресло",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 100.45,
      "category": "chairs"
    },
    {
      "id": 2,
      "image": "/chair2.jpg",
      "title": "Красный стул",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 120.67,
      "category": "chairs"
    },
    {
      "id": 3,
      "image": "/chair3.jpg",
      "title": "Кресло коричневое",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 150.34,
      "category": "chairs"
    },
    {
      "id": 4,
      "image": "/chair4.jpg",
      "title": "Зеленый стул",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 110.38,
      "category": "chairs"
    },
    {
      "id": 7,
      "image": "/chair2.jpg",
      "title": "Серое кресло",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 120.00,
      "category": "chairs"
    },
    {
      "id": 8,
      "image": "/chair3.jpg",
      "title": "Фиолетовый стул",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 100.00,
      "category": "chairs"
    },
    {
      "id": 12,
      "image": "/table2.jpg",
      "title": "Синий стол",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 180.00,
      "category": "tables"
    },
    {
      "id": 14,
      "image": "/table4.jpg",
      "title": "Коричневый стол",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 250.00,
      "category": "tables"
    },
    {
      "id": 16,
      "image": "/table3.jpg",
      "title": "Оранжевый стол",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 240.00,
      "category": "tables"
    },
    {
      "id": 17,
      "image": "/table1.jpg",
      "title": "Фиолетовый стол",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 210.00,
      "category": "tables"
    },
    {
      "id": 18,
      "image": "/table2.jpg",
      "title": "Белый стол",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 190.00,
      "category": "tables"
    },
    {
      "id": 20,
      "image": "/table4.jpg",
      "title": "Черный стол",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 210.00,
      "category": "tables"
    },
    {
      "id": 13,
      "image": "/sofa1.jpg",
      "title": "Зеленый диван",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 220.00,
      "category": "sofa"
    },
    {
      "id": 6,
      "image": "/sofa2.jpg",
      "title": "Коричневый диван",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 140.00,
      "category": "sofa"
    },
    {
      "id": 11,
      "image": "/sofa3.jpg",
      "title": "Красный диван",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 200.00,
      "category": "sofa"
    },
    {
      "id": 9,
      "image": "/sofa4.jpg",
      "title": "Желтый диван",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 160.00,
      "category": "sofa"
    },
    {
      "id": 10,
      "image": "/light1.jpg",
      "title": "Белый светильник",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 110.00,
      "category": "light"
    },
    {
      "id": 5,
      "image": "/light2.jpg",
      "title": "Оранжевое светильник",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 130.00,
      "category": "light"
    },
    {
      "id": 19,
      "image": "/light3.jpg",
      "title": "Серый светильник",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 200.00,
      "category": "light"
    },
    {
      "id": 15,
      "image": "/light4.jpg",
      "title": "Желтый светильник",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero quis nisi convallis aliquet.",
      "price": 230.00,
      "category": "light"
    },
  ];

  // Состояние для хранения списка товаров в корзине
  const [cartItems, setCartItems] = useState<Product[]>([]);
  
  // Загрузка данных из LocalStorage при монтировании компонента
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Функция для добавления товара в корзину
  const addToCart = (product: Product) => {
    let isInArray = false
    cartItems.forEach(el =>{
      if(el.id === product.id)
        isInArray = true
    })
    if(!isInArray)
      setCartItems(prevCartItems => {
        const updatedCart = [...prevCartItems, product];
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        return updatedCart;
      });
  };

  // Функция для удаления товара из корзины
  const removeFromCart = (productId: number) => {
    setCartItems(prevCartItems => {
      const updatedCart = prevCartItems.filter(item => item.id !== productId);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Состояние для хранения списка товаров в зависимости от ктегории
  const [currentProducts, setCurrentProducts] = useState<Product[]>(products);

  // Функция для выбора категории
  const chooseCategory = (categoryKey: string) => {
    if(categoryKey === "all") {
      setCurrentProducts(products)
      return
    }
    setCurrentProducts(products.filter(item => item.category === categoryKey))
  };

  // Состояние для отображения всплывающего окна  
  const [showItem, setShowItem] = useState(false)
  // Состояние для хранения информации о продукте во всплывающем окне
  const [fullItem, setfullItem] = useState({} as Product);

  // Функция для отображения информации о продукте во всплывающем окне
  const OnShowItem = (product: Product) => {
    setfullItem(product)
    setShowItem(!showItem)
  }

  return (
    <div className='wrapper'>
      <Header orders={cartItems} removeFromCart={removeFromCart}/>
      <Categories chooseCategory={chooseCategory} />
      <Items products={currentProducts} addToCart={addToCart} OnShowItem={OnShowItem} />
      {showItem && <ShowFullItem fullItem={fullItem} addToCart={addToCart} OnShowItem={OnShowItem} />}
      <Footer />
    </div>
  )
}

export default App