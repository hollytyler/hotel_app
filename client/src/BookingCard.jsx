import { deleteBooking, newCheckedInStatus } from "./BookingsService"

const BookingCard = ({booking, removeBooking}) => {
  
  const handleDelete = () => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id);
    })
  }

  const toggleCheckedInStatus = (_id, checked_in) => {
    newCheckedInStatus = !checked_in; }

  return (
    <>
      <h1>Name: {booking.name}</h1>
      <h3>{booking.email}</h3>
      <button onClick={toggleCheckedInStatus}>Check Out</button>
      <button onClick={handleDelete}>Delete</button>
      <hr></hr>
    </>
  )
}

export default BookingCard;