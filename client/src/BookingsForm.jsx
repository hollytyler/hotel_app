import { useState } from "react";
import { postBooking } from "./BookingsService";

const BookingsForm = ({addBooking}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const onChange = (e) =>{
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    postBooking(formData).then((data)=>{
      addBooking(data);
    })

    setFormData({
      name: "",
      email: ""
    });
  }

  return (
    <form onSubmit={onSubmit} id="bookings-form">
      <h2> Add a Booking</h2>
      <div className="formWrap">
        <label htmlFor="name">Name</label>
        <input
          onChange={onChange}
          type="text"
          id="name"
          name="name"
          value={formData.name} />
      </div>
      <div className="formWrap">
        <label htmlFor="email">Email</label>
        <input
          onChange={onChange}
          type="text"
          id="email"
          name="email"
          value={formData.email} />
      </div>

      <input type="submit" value="Save" id="save"/>
    </form>
  );
}

export default BookingsForm;