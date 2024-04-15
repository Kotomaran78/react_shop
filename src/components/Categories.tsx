import React from 'react'
import { Сategories } from 'src/type/types';

interface ChildCategories {
  chooseCategory: (category: string) => void;
}

const Categories: React.FC<ChildCategories> = ({ chooseCategory }) => {
  const categories: Сategories[] =[
    { "key": "all", "name": "Всё" },
    { "key": "chairs", "name": "Стулья" },
    { "key": "tables", "name": "Столы" },
    { "key": "sofa", "name": "Диваны" },
    { "key": "light", "name": "Свет" },
  ];
  
  return (
    <div className='categories'>
      {categories.map(el => (
        <div key={el.key} onClick={() => chooseCategory(el.key)} >{el.name}</div>
      ))}
    </div>
  )
}

export default Categories