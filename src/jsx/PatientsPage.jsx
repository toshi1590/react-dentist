import {React, useEffect, useState} from 'react';
import PatientSearchForm from './PatientSearchForm.jsx';
import PatientsTable from './PatientsTable';
import Pagination from './Pagination.jsx';

const PatientsPage = () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();
  const [patients, setPatients] = useState();
  const [found_patients, setFountPatients] = useState();

  useEffect(() => {
    fetch('http://localhost:83/api/patients')
    .then(res => res.json())
    .then(patients => {
      setPatients(patients);
      setFountPatients(patients);
    })
  }, []);

  return (
    <>
      <PatientSearchForm patients={patients} setFountPatients={setFountPatients} setPage={setPage} />
      <PatientsTable patients={found_patients} setPatients={setFountPatients} page={page} setPage={setPage} setPages={setPages} />
      <Pagination page={page} pages={pages} setPage={setPage} />
    </>
  );
}

export default PatientsPage;
