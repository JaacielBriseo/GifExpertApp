import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  const onAddCategory = (newCategory) => {
    // const newAdd =categories.push('Valorant')
    // setCategories([...categories]);
    //setCategories(['Valorant',...categories])
   // setCategories(cat=>[...cat,'Valorant'])
   setCategories([newCategory, ...categories])
    
  };

  return (
    <>
      {/*Titulo */}
      <h1>GifExpertApp</h1>
      {/*Input */}
     < AddCategory 
     //setCategories={setCategories}
     onNewCategory = {onAddCategory}
     />

      {/*Listado de Gif */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/*Gif Item */}
    </>
  );
};
