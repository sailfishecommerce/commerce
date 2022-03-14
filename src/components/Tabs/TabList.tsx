export default function TabList({ text, id, onClick, index, tab }) {
  function onClickHandler() {
    onClick(index);
  }
  const active =
    tab === index ? "bg-red-500 text-white" : "bg-white text-red-500";
  return (
    <li
      onClick={onClickHandler}
      className="nav-item flex-auto text-center"
      role="presentation"
    >
      <a
        href={`#${id}`}
        className={`
        ${active}
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
  `}
        id={`tabs-${id}`}
        data-bs-toggle="pill"
        role="tab"
        aria-controls={id}
      >
        {text}
      </a>
    </li>
  );
}
