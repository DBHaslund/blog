import { useEffect, useState } from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';

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

  const classes = `${switchActive} ${className} items-center dark:shadow-[0_0_2px_2px_rgba(255,255,255,0.4)] rounded-lg`;

  return (
    <button onClick={sortList} className={classes}>
      <i>
        <FaSortUp className='sortUp' />
        <FaSortDown className='sortDown ' />
      </i>
    </button>
  );
};

export default SortingSwitch;
