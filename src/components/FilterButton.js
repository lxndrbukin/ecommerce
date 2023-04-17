import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function FilterButton({ value, handleClick, ...rest }) {
  const [active, setActive] = useState(false);
  const { filter } = useSelector((state) => state);

  const setSizes = (value) => {
    handleClick(value);
    if (!filter.sizes.includes(value)) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <input
      {...rest}
      type='submit'
      className={`filter-btn ${active ? 'active' : ''}`}
      onClick={() => setSizes(value)}
      value={value}
    />
  );
}
