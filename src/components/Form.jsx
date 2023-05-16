import icons from './../images/icons.svg';
export const Form = ({ setIndex, users }) => {
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
  return (
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
  );
};
