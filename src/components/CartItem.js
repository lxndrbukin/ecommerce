export default function CartItem({ name, quantity, price, img }) {
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
        <div className='cart-item-price'>£{price * quantity}</div>
        <div className='cart-item-btns'>
          <input type='button' value='-' />
          <input type='button' value='+' />
        </div>
      </div>
    </div>
  );
}
