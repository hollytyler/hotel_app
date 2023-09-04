import BookingCard from "./BookingCard";
const BookingsGrid = ({bookings, removeBooking}) => {
  const bookingslist = bookings.map((booking) =>{
    return <BookingCard booking={booking} key={booking._id} removeBooking={removeBooking} />
  });

  return (
    <>
    <h1>Booking List</h1>
      {bookingslist}
    </>
  );

}

export default BookingsGrid;