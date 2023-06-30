import { useEffect, useState } from "react";

const Pagination = (props) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    props.setPage(page);
  }, [page])

  const back = () => {
    page > 1 ? setPage(page - 1) : setPage(1);
  }

  const next = () => {
    page < props.pages ? setPage(page + 1) : setPage(props.pages);
  }

  const move = (e) => {
    setPage(Number(e.target.textContent));
  }

  return (
    <>
      <div>Pagination</div>
      <button onClick={back}>{'<'}</button>
      {
        [...Array(props.pages)].map((element, index) => {
          return <button onClick={move}>{index + 1}</button>
        })
      }
      <button onClick={next}>{'>'}</button>
    </>
  )
}

export default Pagination;