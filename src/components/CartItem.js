import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../store';

export default function CartItem({ name, quantity, price, img, size }) {
  const dispatch = useDispatch();

  const cartItem = {
    name,
    quantity,
    price,
    img,
    size,
  };

  const handleDecrement = () => {
    dispatch(decrement(cartItem));
  };

  const handleIncrement = () => {
    dispatch(increment(cartItem));
  };

  const handleRemove = () => {
    dispatch(removeItem(cartItem));
  };

  return (
    <div className='cart-item'>
      <div className='cart-item-img'>
        <img src={img} alt={name} />
      </div>
      <div className='cart-item-info'>
        <div className='cart-item-name'>{name}</div>
        <div className='cart-item-quantity'>Quantity: {quantity}</div>
      </div>
      <div className='cart-item-settings'>
        <div className='cart-item-remove' onClick={handleRemove}>
          <i className='fas fa-times'></i>
        </div>
        <div className='cart-item-price'>£{price}</div>
        <div className='cart-item-btns'>
          <input type='button' onClick={handleDecrement} value='-' />
          <input type='button' onClick={handleIncrement} value='+' />
        </div>
      </div>
    </div>
  );
}
