import { useDispatch } from 'react-redux';
import { addItem } from '../store';

export default function CatalogItem({ name, sizes, img, price, category }) {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(
      addItem({
        name,
        img,
        price,
      })
    );
  };

  return (
    <div className='item'>
      <div className='item-img'>
        <img src={img} alt={name} />
      </div>
      <div className='item-sizes'></div>
      <div className='item-name'>{name}</div>
      <div className='item-price'>£{parseFloat(price).toFixed(2)}</div>
      <button onClick={handleAddItem} className='item-add'>
        Add to Cart
      </button>
    </div>
  );
}
