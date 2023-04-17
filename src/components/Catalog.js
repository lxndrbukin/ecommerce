import { useSelector } from 'react-redux';
import CatalogItem from './CatalogItem';
import Filter from './FIlter';

export default function Catalog() {
  const { data } = useSelector((state) => state.catalog);

  const renderedItems = data.map((item) => {
    return (
      <CatalogItem
        key={item.id}
        name={item.name}
        price={item.price}
        img={item.img}
        sizes={item.sizes}
        category={item.category}
      />
    );
  });

  return (
    <section className='catalog'>
      <Filter />
      <div className='catalog-items'>{renderedItems}</div>
    </section>
  );
}
