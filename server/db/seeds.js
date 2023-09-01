use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Jane Doe",
    email: "janedoe@email.com"
  },
  {
    name: "John Doe",
    email: "johndoe@email.com"
  }
]);

