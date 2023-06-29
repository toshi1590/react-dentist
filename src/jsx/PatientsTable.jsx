import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PatientsPageModule from '../module_css/PatientsPage.module.css';
import Button from './components/Button';

const PatientsTable = () => {
  const [patients, setPatients] = useState();
  const [tds, setTds] = useState();

  const display_tds = (json_data) => {
    setTds(json_data.map(patient => {
      return (
        <>
          <div className={PatientsPageModule.td}>{patient.id}</div>
          <div className={PatientsPageModule.td}>{patient.name}</div>
          <div className={PatientsPageModule.td}>{patient.address}</div>
          <div className={PatientsPageModule.td}>{patient.email}</div>
          <div className={PatientsPageModule.td}>
            <Button background='green'>
              <Link to={`/patients/${patient.id}`} state={{name: patient.name, address: patient.address, email: patient.email}}>edit</Link>
            </Button>
          </div>
          <div className={PatientsPageModule.td}>
            <Button background="red" data-delete_id={patient.id} onClick={del}>delete</Button>
          </div>
        </>
      )
    }));
  }

  useEffect(() => {
    fetch('http://localhost:8000/api/patients')
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
    const answer = window.confirm(`Are you sure to delete user with id: ${e.target.dataset.delete_id}?`);
    if (answer) {
      fetch(`http://localhost:8000/api/patients/${e.target.dataset.delete_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "_method=delete"
      })
      .then(res => res.json())
      .then(json_data => {
        setPatients(json_data);
        display_tds(json_data);        
      })
    }
  }

  return (
    <>
      <h1>Patients</h1>
      <div className={PatientsPageModule.table}>
        <div className={PatientsPageModule.th}>
          id
          <Button background="blue" data-column="id" data-order="asc" onClick={sort}>asc</Button>
          <Button background="blue" data-column="id" data-order="desc" onClick={sort}>desc</Button>
        </div>
        <div className={PatientsPageModule.th}>
          name
          <Button background="blue" data-column="name" data-order="asc" onClick={sort}>asc</Button>
          <Button background="blue" data-column="name" data-order="desc" onClick={sort}>desc</Button>
        </div>
        <div className={PatientsPageModule.th}>
          address
          <Button background="blue" data-column="address" data-order="asc" onClick={sort}>asc</Button>
          <Button background="blue" data-column="address" data-order="desc" onClick={sort}>desc</Button>
        </div>
        <div className={PatientsPageModule.th}>
          email
          <Button background="blue" data-column="email" data-order="asc" onClick={sort}>asc</Button>
          <Button background="blue" data-column="email" data-order="desc" onClick={sort}>desc</Button>
        </div>
        <div className={PatientsPageModule.th}></div>
        <div className={PatientsPageModule.th}></div>
        {tds}
      </div>
    </>
  );
}

export default PatientsTable;
