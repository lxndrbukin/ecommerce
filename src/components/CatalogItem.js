export default function CatalogItem({ name, sizes, img, price, category }) {
  return (
    <div className='item'>
      <div className='item-img'>
        <img src={img} alt={name} />
      </div>
      <div className='item-sizes'></div>
      <div className='item-name'>{name}</div>
      <div className='item-price'>£{parseFloat(price).toFixed(2)}</div>
      <button className='item-add'>Add to Cart</button>
    </div>
  );
}
