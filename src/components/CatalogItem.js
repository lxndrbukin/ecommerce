import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store';

export default function CatalogItem({ name, sizes, img, price, category }) {
  const [size, setSize] = useState(sizes[0]);

  const dispatch = useDispatch();

  const setItemSize = (e) => {
    setSize(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        name,
        img,
        price,
        size,
      })
    );
  };

  const renderedSizes = sizes.map((size) => {
    return <option key={size}>{size}</option>;
  });

  return (
    <div className='item'>
      <div className='item-img'>
        <img src={img} alt={name} />
      </div>
      <div className='item-sizes'>
        <label>Sizes</label>:{' '}
        <select onChange={setItemSize} name='size'>
          {renderedSizes}
        </select>
      </div>
      <div className='item-name'>{name}</div>
      <div className='item-price'>£{parseFloat(price).toFixed(2)}</div>
      <button onClick={handleAddItem} className='item-add'>
        Add to Cart
      </button>
    </div>
  );
}
