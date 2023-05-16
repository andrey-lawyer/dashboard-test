import { NavLink } from 'react-router-dom';
import icons from './../images/icons.svg';
export const LinkHeader = ({
  icon,
  nav,
  stroke,
  bg = '',
  text = '',
  hidden = '',
}) => {
  return (
    <NavLink
      className={`flex justify-between l:p-[13px] pr-[13px] l:mb-[18px] rounded-[8px] ${bg} ${text}`}
      to="/"
    >
      <div className="flex items-center">
        <svg className="w-[24px] h-[24px] l:mr-[16px] mr-[5px]">
          <use xlinkHref={`${icons}#${icon}`}></use>
        </svg>
        <p className="md:inline hidden ">{nav}</p>
      </div>
      <div className={` flex md:hidden l:flex items-center`}>
        <svg className={`${hidden} w-[6px] h-[10px] ${stroke}`}>
          <use xlinkHref={`${icons}#icon-bracket`}></use>
        </svg>
      </div>
    </NavLink>
  );
};
