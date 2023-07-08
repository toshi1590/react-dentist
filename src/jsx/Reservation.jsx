import { useEffect, useState } from "react";

export const Reservation = (props) => {
  const [reservations, setReservations] = useState([]);

  const tds = reservations.map(reservation => {
    return (
      <>
        <div>
          <span>date: {reservation.date}</span>
          <span>---</span>
          <span>patient id: {reservation.patient_id}</span>
        </div>    
      </>
    );
  });

  useEffect(() => {
    fetch(`http://localhost:8000/api/reservations/${props.year}/${props.month}/${props.day}`)
    .then(res => res.json())
    .then(json_data => {
      setReservations([]);
      json_data.map(reservation => {
        setReservations(reservations => [...reservations, {date: reservation.date, patient_id: reservation.patient_id}]);
      });
    })
  }, [props])
 
  return (
    <>
      <div>{tds}</div>
    </>
  );
}