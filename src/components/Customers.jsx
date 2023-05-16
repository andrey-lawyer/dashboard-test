import { useState } from 'react';

import hello from '../images/Hello Evano 👋🏼,.svg';
import data from './../data/info';

import { List } from './List';
import { Form } from './Form';
import { Table } from './Table';
import { LinkPagination } from './LinkPagination';

export const Customers = () => {
  const [users, setUsers] = useState(data);
  const [index, setIndex] = useState(-1);

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
        <Form setIndex={setIndex} users={users} />
        <div className=" absolute top-[167px] left-0 l:w-[968px]  border-b border-b-[#EEEEEE] "></div>
        <Table>
          <List
            users={users}
            onIsActive={onIsActive}
            setIndex={setIndex}
            index={index}
          />
        </Table>
        <div className="md:flex items-center font-medium justify-between">
          <p className="text-mid font-medium tracking-[-0.01em] text-[#B5B7C0] mb-4 md:mb-0">
            Showing data 1 to 8 of
            <span className="pl-[7.39px]">256K entries</span>
          </p>
          <ul className="text-mini flex gap-x-[12px] text-[#404B52] ">
            <li>
              <LinkPagination w="w-[26px] " h="h-[24px]" symbol="<" />
            </li>
            <li>
              <LinkPagination
                w="w-[25px]"
                h="h-[24px]"
                symbol="1"
                bg="bg-[#5932EA]"
                text="text-white"
              />
            </li>
            <li>
              <LinkPagination w="w-[25px]" h="h-[24px]" symbol="2" />
            </li>
            <li>
              <LinkPagination w="w-[24px]" h="h-[24px]" symbol="3" />
            </li>
            <li>
              <LinkPagination w="w-[26px]" h="h-[24px]" symbol="4" />
            </li>
            <li>
              <div className=" h-[24px]  flex justify-center items-center">
                ...
              </div>
            </li>
            <li>
              <LinkPagination w="w-[25px]" h="h-[24px]" symbol="40" />
            </li>
            <li>
              <LinkPagination w="w-[26px]" h="h-[24px]" symbol=">" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
