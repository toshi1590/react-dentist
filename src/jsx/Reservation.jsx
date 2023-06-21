import { useState } from "react";

export const Reservation = (props) => {
  const [text, setText] = useState()

  fetch(`https://dummyjson.com/products/${props.day}`)
  .then((res) => {
    return res.json(); 
  })
  .then((json) => {
    setText(json.description);
  })
 
  return (
    <>
      <div>{props.year} {props.month} {props.day}</div>
      <div>{text}</div>
    </>
  );
}