import { useState, useEffect } from 'react';
// import './App.css'
import BookingCard from './BookingCard';
import BookingsGrid from './BookingsGrid';
import { getBookings } from './BookingsService';
import BookingsForm from './BookingsForm';


function App() {

  const [forBookings, setForBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setForBookings(allBookings);
    })
  }, []);
  
  const addBooking = (booking) => {
    setForBookings([...forBookings, booking]);
  }

  const removeBooking = (id) => {
    const bookingsToKeep = forBookings.filter(booking => booking._id !== id)
    setForBookings(bookingsToKeep);
  }

  return (
    <>
      <BookingsForm addBooking={addBooking} />
      <BookingsGrid bookings={forBookings} removeBooking={removeBooking} />
    </>
  );
}

export default App;
