import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../store';
import Spinner from '../static/Spinner';
import CatalogItem from './CatalogItem';
import Filter from './FIlter';

export default function Catalog() {
  const { catalog, filter } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  let content;

  if (catalog.data.length) {
    const data = catalog.data
      .filter((item) => {
        if (filter.sizes.length) {
          return filter.sizes.some((size) => item.sizes.includes(size));
        } else {
          return item;
        }
      })
      .map((item) => {
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
    content = <div className="catalog-items">{data}</div>;
  } else {
    content = <Spinner />;
  }

  return (
    <section className="catalog">
      <div className="catalog-header">{content.length} product(s) found</div>
      <Filter />
      <Spinner />
    </section>
  );
}
