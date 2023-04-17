import { useDispatch } from 'react-redux';
import { setSizes } from '../store';

export default function Filter() {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const dispatch = useDispatch();

  const handleClick = (size) => {
    dispatch(setSizes(size));
  };

  const renderedSizeBtns = sizes.map((size) => {
    return (
      <button onClick={() => handleClick(size)} key={size}>
        {size}
      </button>
    );
  });
  return <div className='filter'>{renderedSizeBtns}</div>;
}
