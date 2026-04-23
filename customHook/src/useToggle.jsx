import { useState } from 'react';

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggle = (val) => {
    if (typeof val === 'boolean') {
      setValue(val);
    } else {
      setValue(!value);
    }
  };

  return [value, toggle];
}

export default useToggle;