import { NavLink } from 'react-router-dom';
export const LinkPagination = ({
  w,
  symbol,
  bg = 'bg-[#F5F5F5]',
  text = '',
}) => {
  return (
    <NavLink
      className={`${w}  ${bg} ${text} h-[24px] flex justify-center items-center  border border-solid  border-[#EEEEEE] rounded-[4px]`}
      to="/"
    >
      {symbol}
    </NavLink>
  );
};
