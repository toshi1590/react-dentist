import { useEffect, useState } from "react";

const Pagination = (props) => {
  useEffect(() => {
    const page_buttons = document.querySelectorAll('.page_button');

    page_buttons.forEach((element, index) => {
      if (index == props.page - 1) {
        element.style.color = 'red';        
      } else {
        element.style.color = 'black';
      }
    })
  }, [props.page])

  const back = () => {
    props.page > 1 ? props.setPage(props.page - 1) : props.setPage(1);
  }

  const next = () => {
    props.page < props.pages ? props.setPage(props.page + 1) : props.setPage(props.pages);
  }

  const move = (e) => {
    props.setPage(Number(e.target.textContent));
  }

  const buttons = [...Array(props.pages)].map((element, index) => {
    return <button className="page_button" key={index + 1} onClick={move}>{index + 1}</button>
  });

  return (
    <>
      <button onClick={back}>{'<'}</button>
      {buttons}
      <button onClick={next}>{'>'}</button>
    </>
  )
}

export default Pagination;