import { useDispatch } from 'react-redux';
import { setSizes } from '../store';
import FilterButton from './FilterButton';

export default function Filter() {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const dispatch = useDispatch();

  const handleClick = (size) => {
    dispatch(setSizes(size));
  };

  const renderedSizeBtns = sizes.map((size) => {
    return (
      <FilterButton
        type='submit'
        handleClick={handleClick}
        key={size}
        value={size}
      />
    );
  });
  return <div className='filter'>{renderedSizeBtns}</div>;
}
