import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../store';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement(item));
  };

  const handleIncrement = () => {
    dispatch(increment(item));
  };

  const handleRemove = () => {
    dispatch(removeItem(item));
  };

  return (
    <div className='cart-item'>
      <div className='cart-item-img'>
        <img src={item.img} alt={item.name} />
      </div>
      <div className='cart-item-info'>
        <div className='cart-item-name'>{item.name}</div>
        <div className='cart-item-quantity'>Quantity: {item.quantity}</div>
      </div>
      <div className='cart-item-settings'>
        <div className='cart-item-remove' onClick={handleRemove}>
          <i className='fas fa-times'></i>
        </div>
        <div className='cart-item-price'>£{item.price}</div>
        <div className='cart-item-btns'>
          <input
            type='button'
            disabled={item.quantity === 1 ? true : false}
            onClick={handleDecrement}
            value='-'
          />
          <input type='button' onClick={handleIncrement} value='+' />
        </div>
      </div>
    </div>
  );
}
