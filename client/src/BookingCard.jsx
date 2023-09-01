import { deleteBooking } from "./BookingsService"

const BookingCard = ({booking, removeBooking}) => {
  
  const handleDelete = () => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id);
    })
  }

  const handleCheckIn = () => {
    checkedIn(booking._id).then(() =>{
      selectCheckIn(booking._id);
    })
  }

  return (
    <>
      <h1>Name: {booking.name}</h1>
      <h3>{booking.email}</h3>
      <button onClick={handleCheckIn}>Check Out</button>
      <button onClick={handleDelete}>Delete</button>
      <hr></hr>
    </>
  )
}

export default BookingCard;