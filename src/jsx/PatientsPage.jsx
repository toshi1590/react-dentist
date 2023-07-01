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
    fetch('http://localhost:8000/api/patients')
    .then(res => res.json())
    .then(patients => {
      setPatients(patients);
      setFountPatients(patients);
    })
  }, []);

  useEffect(() => {
    console.log(found_patients);
  }, [found_patients])

  return (
    <>
      <PatientSearchForm patients={patients} setFountPatients={setFountPatients} />
      <PatientsTable patients={found_patients} page={page} setPage={setPage} setPages={setPages} />
      <Pagination page={page} pages={pages} setPage={setPage} />
    </>
  );
}

export default PatientsPage;
