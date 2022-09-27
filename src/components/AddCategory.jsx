import { useState } from 'react';

export const AddCategory = ({setCategories}) => {
    
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
   // console.log(target.value);
  };
  const onSubmit = (event) =>{
    event.preventDefault()
    if(inputValue.trim().length <= 1)return
    setCategories(categories=>[inputValue,...categories])
    setInputValue('')

  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      <button>Add new</button>
    </form>
  );
};
