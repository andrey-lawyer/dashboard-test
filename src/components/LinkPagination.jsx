import { NavLink } from 'react-router-dom';
export const LinkPagination = ({
  w,
  h,
  symbol,
  bg = 'bg-[#F5F5F5]',
  text = '',
}) => {
  return (
    <NavLink
      className={`w-[${w}px] h-[${h}px] ${bg} ${text} flex justify-center items-center  border border-solid  border-[#EEEEEE] rounded-[4px]`}
      to="/"
    >
      {symbol}
    </NavLink>
  );
};
