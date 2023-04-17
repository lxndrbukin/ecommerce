import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function Cart() {
  const { items } = useSelector((state) => state.cart);

  const content = items.map((item) => {
    return <CartItem key={item.name} name={item.name} price={item.price} />;
  });

  return <div className='cart-content'></div>;
}
