import { useState } from "react";

const Pagination = (props) => {
  const [page, setPage] = useState(1);

  return (
    <>
      <div>Pagination</div>
      <div>{props.the_number_of_patients}</div>
      <div>{props.trs_per_page}</div>
    </>
  )
}

export default Pagination;