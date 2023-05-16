import hello from '../images/Hello Evano 👋🏼,.svg';
import icons from './../images/icons.svg';
import { Table } from './Table';
import data from './../data/info';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Customers = () => {
  const [users, setUsers] = useState(data);
  const [index, setIndex] = useState(-1);
  const handleSubmit = event => {
    setIndex(-1);
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const value = elements.search.value;
    if (!value.trim()) return alert('enter something...');
    const ind = users.findIndex(el => {
      const arrayObject = Object.values(el);
      return arrayObject.find(el => el.includes(value));
    });
    ind !== -1 ? setIndex(ind) : alert('not found');
    elements.search.value = '';
  };
  const onIsActive = id => {
    setUsers(prevState => {
      const state = prevState.map(el => {
        if (el.id === id) {
          const status = el.status === 'Active' ? 'Inactive' : 'Active';
          return { ...el, status: status };
        }
        return el;
      });
      return state;
    });
  };

  return (
    <main className="md:pt-[41px] l:pl-[71px] md:px-[18px]">
      <img
        className="hidden md:block mb-[51px] h-[36px] "
        src={hello}
        alt="hello, user"
        width="176"
      />
      <section className=" relative l:pl-[38px] l:pt-[30px] l:pr-[40px] p-[10px] md:p-[20px] md:pl-[20px] pb-[40px] shadow-custom l:w-[968px] tracking-[-0.01em]">
        <h1 className="font-semibold mb-[7px] text-big">All Customers</h1>
        <h2 className="font-normal text-[#16C098] text-mid mb-[40px]">
          Active Members
        </h2>
        <form
          onSubmit={handleSubmit}
          className="absolute top-[44px] right-[40px] mini:top-[64px] mini:right-[20px] "
        >
          <button type="submit">
            <svg className="absolute top-[7px] left-[9px]  w-[24px] h-[24px] mr-[14px] ">
              <use xlinkHref={`${icons}#icon-search`}></use>
            </svg>
          </button>
          <input
            className="w-[160px]   md:w-[216px] pl-[40px]  py-[10px] rounded-[10px]  bg-[#F9FBFF] text-[#B5B7C0] text-pl focus:outline-none placeholder:tracking-[-0.01em]  "
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
            name="search"
          />
        </form>
        <div className=" absolute top-[167px] left-0 l:w-[968px]  border-b border-b-[#EEEEEE] "></div>
        <table className=" text-min md:text-mid font-medium mb-[31px]">
          <thead className=" ">
            <tr className=" text-left text-[#B5B7C0]  ">
              <th className="pb-[14px] l:w-[172px] md:w-[132px]  font-medium">
                Customer Name
              </th>
              <th className="pb-[15px] l:w-[131px] md:w-[91px]  font-medium">
                Company
              </th>
              <th className="pb-[15px] l:w-[156px] md:w-[116px]  font-medium">
                Phone Number
              </th>
              <th className="pb-[15px] l:w-[207px] md:w-[167px]  font-medium">
                Email
              </th>
              <th className="pb-[15px] l:w-[140px] md:w-[110px]  font-medium">
                Country
              </th>
              <th className="pb-[15px] md:text-center l:w-[80px]  font-medium">
                Status
              </th>
            </tr>
          </thead>
          <Table
            users={users}
            onIsActive={onIsActive}
            setIndex={setIndex}
            index={index}
          />
        </table>
        <div className="md:flex items-center font-medium justify-between">
          <p className="text-mid font-medium tracking-[-0.01em] text-[#B5B7C0] mb-4 md:mb-0">
            Showing data 1 to 8 of
            <span className="pl-[7.39px]">256K entries</span>
          </p>
          <ul className="text-mini flex gap-x-[12px] text-[#404B52] ">
            <li>
              <Link
                className="w-[26px] h-[24px] flex justify-center items-center  border border-solid bg-[#F5F5F5] border-[#EEEEEE] rounded-[4px]"
                to="/"
              >
                {'<'}
              </Link>
            </li>

            <li>
              <Link
                className="w-[25px] h-[24px]  flex justify-center items-center  border border-solid bg-[#5932EA] text-white border-[#EEEEEE] rounded-[4px]"
                to="/"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                className="w-[25px] h-[24px]  flex justify-center items-center  border border-solid bg-[#F5F5F5] border-[#EEEEEE] rounded-[4px]"
                to="/"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                className="w-[24px] h-[24px]  flex justify-center items-center  border border-solid bg-[#F5F5F5] border-[#EEEEEE] rounded-[4px]"
                to="/"
              >
                3
              </Link>
            </li>
            <li>
              <Link
                className="w-[26px] h-[24px]  flex justify-center items-center  border border-solid bg-[#F5F5F5] border-[#EEEEEE] rounded-[4px]"
                to="/"
              >
                4
              </Link>
            </li>

            <li>
              <div
                className=" h-[24px]  flex justify-center items-center  "
                to="/"
              >
                ...
              </div>
            </li>
            <li>
              <Link
                className="w-[25px] h-[24px]  flex justify-center items-center  border border-solid bg-[#F5F5F5] border-[#EEEEEE] rounded-[4px]"
                to="/"
              >
                40
              </Link>
            </li>
            <li>
              <Link
                className="w-[26px] h-[24px] flex justify-center items-center  border border-solid bg-[#F5F5F5] border-[#EEEEEE] rounded-[4px]"
                to="/"
              >
                {'>'}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
