import { useEffect, useState } from "react";

const Pagination = (props) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(document.querySelectorAll('.page_button'));
    console.log(document.querySelectorAll('.page_button').length);

    alert('rendered');

  }, [])

  useEffect(() => {
    props.setPage(page);

    // console.log(document.querySelectorAll('.page_button'));
    // console.log(document.querySelectorAll('.page_button')[0]);
    // console.log(document.querySelectorAll('.page_button').length);

    // const page_buttons = document.querySelectorAll('.page_button');
    // page_buttons.forEach(element => {
    //   console.log(element);

    //   element.style.color ='red';
    // })

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

  const buttons = [...Array(props.pages)].map((element, index) => {
    return <button className="page_button" key={index + 1} onClick={move}>{index + 1}</button>
  });

  return (
    <>
      <div>Pagination</div>
      <button onClick={back}>{'<'}</button>
      {buttons}
      <button onClick={next}>{'>'}</button>
    </>
  )
}

export default Pagination;