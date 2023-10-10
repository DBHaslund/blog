import { useEffect, useState } from 'react';
import {
  FaSortUp,
  FaSortDown,
} from 'react-icons/fa';

interface Props {
  sortList: () => void;
  sorting: string;
  className?: string;
}

const SortingSwitch = ({ sortList, sorting, className }: Props) => {
  const [switchActive, setSwitchActive] = useState<string>('sortingSwitch');

  useEffect(() => {
    if (sorting === 'newest') {
      setSwitchActive('sortingSwitch');
    }
    if (sorting === 'oldest') {
      setSwitchActive('sortingSwitch active');
    }
  }, [sorting]);

  const classes = `${switchActive} ${className} items-center`;

  return (
    <button onClick={sortList} className={classes}>
        <i className='sortUp'>
          <FaSortUp />
        </i>
        <i className='sortDown'>
          <FaSortDown />
        </i>
    </button>
  );
};

export default SortingSwitch;
