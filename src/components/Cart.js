import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function Cart() {
  const { items } = useSelector((state) => state.cart);

  let sum = 0;
  items.forEach((item) => {
    sum += item.price * item.quantity;
  });

  let content;

  if (items.length) {
    content = items.map((item) => {
      return <CartItem key={item.id} item={item} />;
    });
  } else {
    content = null;
  }

  return (
    <div className='cart-wrapper'>
      <div className='cart-content-wrapper'>
        <div className='cart-content'>{content}</div>
        {(content && (
          <div className='cart-total'>Total amount: £{sum}</div>
        )) || <span className='cart-empty'>Empty</span>}
      </div>
    </div>
  );
}
