import { useEffect, useState } from "react";

export const Reservation = (props) => {
  const [reservations, setReservations] = useState([]);

  const tds = reservations.map(reservation => {
    return (
      <>
        <div>
          {`${reservation.date.match(/\d{2}:\d{2}:\d{2}/)} --- ${reservation.name}`}
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
        setReservations(reservations => [...reservations, {date: reservation.date, name: reservation.name}]);
      });
    })
  }, [props])
 
  return (
    <>
      <div>{`${props.year}/${props.month}/${props.day}`}</div>
      <div>{tds}</div>
    </>
  );
}