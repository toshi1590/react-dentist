import {React, useState} from 'react';
import SearchForm from './SearchForm.jsx';
import PatientsTable from './PatientsTable';
import Pagination from './Pagination.jsx';

const PatientsPage = () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();

  return (
    <>
      <SearchForm />
      <PatientsTable page={page} setPage={setPage} setPages={setPages} />
      <Pagination pages={pages} setPage={setPage} />
    </>
  );
}

export default PatientsPage;
