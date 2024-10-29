import style from "./style.module.css";

interface PaginationProps {
  maxWidth: number;
  countPage: number;
  activePage: number;
  setActivePage: (arg0: number) => void;
}

export function Pagination({
  maxWidth,
  countPage,
  activePage,
  setActivePage,
}: PaginationProps) {
  const numbersPage = Array.from({ length: countPage }, (_, i) => i + 1);

  function handleClickSetPage(state: number) {
    setActivePage(state);
  }

  return (
    <div className={style.container} style={{ maxWidth: `${maxWidth}px` }}>
      {numbersPage.map((page, index) => {
        return (
          <div
            key={index}
            className={`${style.dots} ${
              activePage === page ? style.activePage : ""
            }`}
            onClick={() => handleClickSetPage(index + 1)}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
}
