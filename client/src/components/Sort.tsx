import { FC, memo, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { arrowTopIcon } from "../img";

import { SortProps, TypeSortObj, setSort } from "../redux";


export const typesSort: TypeSortObj[] = [
  { name: "популярности", sortProperty: "rating" },
  { name: "цене", sortProperty: "price" },
  { name: "алфавиту", sortProperty: "title" },
];

export const Sort: FC<SortProps> = memo(({ sortObj }) => {
  const dispatch = useDispatch();
  const sortRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const updateActiveType = (type: TypeSortObj) => {
    dispatch(setSort(type));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const el: HTMLDivElement | null = sortRef.current;

      if (el && !event.composedPath().includes(el)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside); //при удалении компонента
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img src={arrowTopIcon} alt="" />
        <b>Сортировка по:</b>
        <button disabled={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {sortObj?.name}
        </button>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {typesSort.map((type, i) => {
              return (
                <li
                  key={i}
                  onClick={() => updateActiveType(type)}
                  className={
                    type.sortProperty === sortObj?.sortProperty ? "active" : ""
                  }
                >
                  {type.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
});