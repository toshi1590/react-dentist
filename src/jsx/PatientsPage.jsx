import {React, useEffect, useState} from 'react';
import Pagination from './Pagination.jsx'
import PatientsPageModule from '../module_css/PatientsPage.module.css';
import { Link } from 'react-router-dom';

const PatientsPage = () => {
  const [patients, setPatients] = useState();
  const [tds, setTds] = useState();
  
  // const display_ths = () => {
  // }

  const display_tds = (json_data) => {
    setTds(json_data.map(patient => {
      return (
        <>
          <div className={PatientsPageModule.td}>{patient.id}</div>
          <div className={PatientsPageModule.td}>{patient.name}</div>
          <div className={PatientsPageModule.td}>{patient.address}</div>
          <div className={PatientsPageModule.td}>{patient.email}</div>
          <div className={PatientsPageModule.td}>
            <button>
              <Link to={`/patients/${patient.id}`} state={{name: patient.name, address: patient.address}}>edit</Link>
            </button>
          </div>
          <div className={PatientsPageModule.td}>
            <button onClick={del}>delete</button>
          </div>
        </>
      )
    }));
  }

  useEffect(() => {
    fetch('http://localhost:81/patients')
    .then(res => res.json())
    .then(json_data => {
      setPatients(json_data);
      display_tds(json_data);
    })
  }, []);

  const sort = e => {
    const column = e.target.dataset.column;
    const order = e.target.dataset.order;

    setPatients((patients) => {
      if (order == 'asc') {
        patients.sort((first, second) => {
          if (first[column] > second[column]){
            return 1;
          } else if (first[column] < second[column]) {
            return -1;
          } else {
            return 0;
          }
        });
      } else {
        patients.sort((first, second) => {
          if (first[column] > second[column]){
            return -1;
          } else if (first[column] < second[column]) {
            return 1;
          } else {
            return 0;
          }
        });  
      }


      display_tds(patients);


      return patients;
    })


    // display_tds(patients);
  }

  const del = (e) => {
    const answer = window.confirm('Are you sure to delete ...?');
    answer == true ? window.alert('deleted') : window.alert('not deleted');
  }

  return (
    <>
      <div>Patients</div>
      <div className={PatientsPageModule.table}>
        <div className={PatientsPageModule.th}>
          id
          <button className={PatientsPageModule.btn} data-column="id" data-order="asc" onClick={sort}>asc</button>
          <button className={PatientsPageModule.btn} data-column="id" data-order="desc" onClick={sort}>desc</button>
        </div>
        <div className={PatientsPageModule.th}>
          name
          <button className={PatientsPageModule.btn} data-column="name" data-order="asc" onClick={sort}>asc</button>
          <button className={PatientsPageModule.btn} data-column="name" data-order="desc" onClick={sort}>desc</button>
        </div>
        <div className={PatientsPageModule.th}>
          address
          <button className={PatientsPageModule.btn} data-column="address" data-order="asc" onClick={sort}>asc</button>
          <button className={PatientsPageModule.btn} data-column="address" data-order="desc" onClick={sort}>desc</button>
        </div>
        <div className={PatientsPageModule.th}>
          email
          <button className={PatientsPageModule.btn} data-column="email" data-order="asc" onClick={sort}>asc</button>
          <button className={PatientsPageModule.btn} data-column="email" data-order="desc" onClick={sort}>desc</button>
        </div>
        <div className={PatientsPageModule.th}></div>
        <div className={PatientsPageModule.th}></div>
        {tds}
      </div>
      <Pagination />
    </>
  );
}

export default PatientsPage;
