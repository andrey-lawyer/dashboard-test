import logo from './../images/icons/logo.svg';
import photo from './../images/photo.png';
import { LinkHeader } from './LinkHeader';

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
            <LinkHeader
              icon="icon-key"
              nav="Dashboard"
              stroke="stroke-[#9197B3]"
              hidden="hidden"
            />
          </li>
          <li>
            <LinkHeader icon="icon-d" nav="Product" stroke="stroke-[#9197B3]" />
          </li>
          <li>
            <LinkHeader
              icon="icon-user"
              nav="Customers"
              stroke="stroke-white"
              bg="bg-[#5932EA]"
              text="text-white"
            />
          </li>
          <li>
            <LinkHeader
              icon="icon-wallet"
              nav="Income"
              stroke="stroke-[#9197B3]"
            />
          </li>
          <li>
            <LinkHeader
              icon="icon-discount"
              nav="Promote"
              stroke="stroke-[#9197B3]"
            />
          </li>
          <li>
            <LinkHeader
              icon="icon-message"
              nav="Help"
              stroke="stroke-[#9197B3]"
            />
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
