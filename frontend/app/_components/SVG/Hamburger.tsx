export const Hamburger: React.FC<{
  color: string;
  width: string;
  height: string;
}> = ({ color, width, height }) => (
  <svg
    stroke={color}
    fill='none'
    className='hamburger dark:stroke-[#a9a9a9]'
    viewBox='-10 -10 120 120'
    height={height}
    width={width}
    strokeWidth='10'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path
      className='line'
      d='m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 l 19 0 C 46 20 51 25 51 32 v 70'
    ></path>
  </svg>
);
