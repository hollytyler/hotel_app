import { deleteBooking } from "./BookingsService"

const BookingCard = ({booking, removeBooking}) => {
  
  // console.log(booking);
  const handleDelete = () => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id);
    })
  }

  return (
    <>
      <h1>Name: {booking.name}</h1>
      <h3>{booking.email}</h3>
      <button onClick={handleDelete}>Delete</button>
      <hr></hr>
    </>
  )
}

export default BookingCard;