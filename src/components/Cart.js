import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function Cart() {
  const { items } = useSelector((state) => state.cart);

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
        />
      );
    });
  } else {
    content = 'Empty';
  }

  return <div className='cart-content'>{content}</div>;
}
