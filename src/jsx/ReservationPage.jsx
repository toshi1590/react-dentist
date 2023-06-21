import {React, Fragment, useState} from 'react';
import {Calender} from './Calender.jsx';
import {Reservation} from './Reservation.jsx';

export const ReservationPage = () => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();

  return (
    <Fragment>
      <h1>Reservation</h1>
      <Calender setYear={setYear} setMonth={setMonth} setDay={setDay} />
      <Reservation year={year} month={month} day={day} />
    </Fragment>
  );
}
