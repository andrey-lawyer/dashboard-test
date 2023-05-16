import { memo } from 'react';

export const List = memo(({ users, onIsActive, setIndex, index }) => {
  const outline = ind => {
    if (ind === index) return 'outline-red-500 outline outline-4';
  };

  const onClickOutline = ind => {
    if (ind === index) setIndex(-1);
  };

  const active =
    'bg-[rgb(22,192,152)] bg-opacity-[38%] border-[#00B087] text-[#008767]';
  const inActive = 'bg-[#FFC5C5] border-[#DF0404] text-[#DF0404]';

  const colorButton = status => {
    const color = status === 'Active' ? active : inActive;
    return color;
  };

  return (
    <tbody className="">
      {users.map(
        ({ id, name, company, phone, email, country, status }, ind) => (
          <tr
            onClick={() => onClickOutline(ind)}
            className={`${outline(
              ind
            )}  text-[#292D32] border-b border-solid border-b-[#EEEEEE]   }`}
            key={id}
          >
            <td className="">{name}</td>
            <td className="">{company}</td>
            <td className="">{phone}</td>
            <td className="mini:truncate mini:w-[60px] mini:block md:table-cell ">
              {email}
            </td>
            <td className="">{country}</td>
            <td className="pt-[21px] pb-[21px]">
              <button
                className={`${colorButton(
                  status
                )} border border-solid rounded-[4px]  w-[50px] md:w-[80px] py-[3px]  `}
                onClick={() => onIsActive(id)}
              >
                {status}
              </button>
            </td>
          </tr>
        )
      )}
    </tbody>
  );
});
