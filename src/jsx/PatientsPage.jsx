import {React, useState} from 'react';
import PatientSearchForm from './PatientSearchForm.jsx';
import PatientsTable from './PatientsTable';
import Pagination from './Pagination.jsx';

const PatientsPage = () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();

  return (
    <>
      <PatientSearchForm />
      <PatientsTable page={page} setPage={setPage} setPages={setPages} />
      <Pagination page={page} pages={pages} setPage={setPage} />
    </>
  );
}

export default PatientsPage;
