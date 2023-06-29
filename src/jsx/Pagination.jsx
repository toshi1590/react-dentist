import { useState } from "react";

const Pagination = (props) => {
  const [page, setPage] = useState(1);
  const the_number_of_pages = props.the_number_of_pages;

  const back = () => {
    page > 1 ? setPage(page - 1) : setPage(1);
  }

  const next = () => {
    page < the_number_of_pages ? setPage(page + 1) : setPage(the_number_of_pages);
  }

  const move = (e) => {
    e.target.style.color = "red";
    setPage(Number(e.target.textContent));
  }

  return (
    <>
      <div>Pagination</div>
      <button onClick={back}>{'<'}</button>
      <button onClick={move}>1</button>
      <button onClick={move}>2</button>
      <button onClick={move}>3</button>
      <button onClick={move}>4</button>
      <button onClick={next}>{'>'}</button>
      {page}
    </>
  )
}

export default Pagination;