import { NavLink } from 'react-router-dom';
import logo from './../images/icons/logo.svg';
import icons from './../images/icons.svg';
import photo from './../images/photo.png';

export const Header = () => {
  return (
    <header className="bg-white  l:min-h-[100vh] pt-[36px] l:px-[28px] md:px-[18px] px-[10px] shadow-custom l:block flex items-center pb-[28px] justify-between ">
      <div className="flex items-center l:mb-[65px] ">
        <img className="mini:hidden mr-[8px]" src={logo} alt="logo" />
        <p
          className="font-semibold tracking-[0.01em] 
        hidden l:block"
        >
          Dashboard
          <span className=" font-medium ml-[4px] text-s tracking-[-0.01em] text-[#838383]">
            v.01
          </span>
        </p>
      </div>
      <nav className="l:mb-[597px] tracking-[-0.01em] font-medium text-mid text-[#9197B3] ">
        <ul className="flex l:block">
          <li>
            <NavLink
              className="flex items-center l:pl-[11px] pr-[13px]  l:py-[11px] l:mb-[18px] rounded-[8px]"
              to="/"
            >
              <svg className="w-[24px] h-[24px] l:mr-[14px] mr-[5px]">
                <use xlinkHref={`${icons}#icon-key`}></use>
              </svg>
              <p className="md:inline hidden "> Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex justify-between l:p-[13px] pr-[13px]   l:mb-[18px] rounded-[8px]"
              to="/"
            >
              <div className="flex items-center">
                <svg className="w-[24px] h-[24px] l:mr-[16px] mr-[5px]">
                  <use xlinkHref={`${icons}#icon-d`}></use>
                </svg>
                <p className="md:inline hidden ">Product</p>
              </div>
              <div className="flex md:hidden l:flex items-center">
                <svg className="w-[6px] h-[10px] stroke-[#9197B3]">
                  <use xlinkHref={`${icons}#icon-bracket`}></use>
                </svg>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex justify-between l:p-[13px] l:mb-[18px] pr-[13px] rounded-[8px]  bg-[#5932EA] text-white"
              to="/"
            >
              <div className="flex items-center">
                <svg className="w-[24px] h-[24px] l:mr-[16px] mr-[5px]">
                  <use xlinkHref={`${icons}#icon-user`}></use>
                </svg>
                <p className="md:inline hidden ">Customers</p>
              </div>
              <div className="flex md:hidden l:flex items-center">
                <svg className="w-[6px] h-[10px]  stroke-white  ">
                  <use xlinkHref={`${icons}#icon-bracket`}></use>
                </svg>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex justify-between l:p-[13px] l:mb-[18px] pr-[13px] rounded-[8px]"
              to="/"
            >
              <div className="flex items-center">
                <svg className="w-[24px] h-[24px] l:mr-[16px] mr-[5px] ">
                  <use xlinkHref={`${icons}#icon-wallet`}></use>
                </svg>
                <p className="md:inline hidden ">Income</p>
              </div>
              <div className="flex md:hidden l:flex items-center ">
                <svg className="w-[6px] h-[10px] stroke-[#9197B3]">
                  <use xlinkHref={`${icons}#icon-bracket`}></use>
                </svg>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex justify-between l:p-[13px] l:mb-[18px] pr-[13px] rounded-[8px]"
              to="/"
            >
              <div className="flex items-center">
                <svg className="w-[24px] h-[24px] l:mr-[16px] mr-[5px]">
                  <use xlinkHref={`${icons}#icon-discount`}></use>
                </svg>
                <p className="md:inline hidden ">Promote</p>
              </div>
              <div className="flex md:hidden l:flex items-center">
                <svg className="w-[6px] h-[10px] stroke-[#9197B3]">
                  <use xlinkHref={`${icons}#icon-bracket`}></use>
                </svg>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex justify-between l:p-[13px] pr-[13px] rounded-[8px]"
              to="/"
            >
              <div className="flex items-center">
                <svg className="w-[24px] h-[24px] l:mr-[16px] mr-[5px]">
                  <use xlinkHref={`${icons}#icon-message`}></use>
                </svg>
                <p className="md:inline hidden ">Help</p>
              </div>
              <div className="flex md:hidden l:flex items-center">
                <svg className="w-[6px] h-[10px] stroke-[#9197B3]">
                  <use xlinkHref={`${icons}#icon-bracket`}></use>
                </svg>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex l:mb-[76px] items-center ">
        <img src={photo} alt="user" with="42" height="42" />
        <div className="hidden md:block   md:ml-[5px]  l:ml-[12px] tracking-[0.01em]">
          <p className="font-medium text-mid">Evano</p>
          <p className="font-normal text-pl text-[#757575] ">Project Manager</p>
        </div>
      </div>
    </header>
  );
};
