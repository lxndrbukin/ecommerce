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
      return (
        <CartItem
          key={item.name}
          name={item.name}
          price={item.price}
          img={item.img}
          quantity={item.quantity}
          size={item.size}
        />
      );
    });
  } else {
    content = 'Empty';
  }

  return (
    <div className='cart-content'>
      {content}
      <div className='cart-total'>Total amount: £{sum}</div>
    </div>
  );
}
