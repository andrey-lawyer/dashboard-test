export const Table = ({ children }) => {
  return (
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
      {children}
    </table>
  );
};
