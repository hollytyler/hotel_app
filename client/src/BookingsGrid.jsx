import BookingCard from "./BookingCard";
const BookingsGrid = ({bookings, removeBooking}) => {
  const bookingslist = bookings.map((booking) =>{
    return <BookingCard booking={booking} key={booking._id} removeBooking={removeBooking} />
  });

  return (
    <>
      {bookingslist}
    </>
  );

}

export default BookingsGrid;