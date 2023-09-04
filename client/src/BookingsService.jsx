const baseURL = 'http://localhost:9000/api/bookings/'

export const getBookings = () => {
  return fetch(baseURL)
    .then(res => res.json())
}

export const postBooking = (payload) => {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => res.json())
}

export const newCheckedInStatus = (id) => {
  return fetch(baseURL + id, {
    method: 'PUT',
    body: JSON.stringify({checked_in, newCheckedInStatus}),
    headers: {'Content-Type': 'application/json'}
  })
}

export const deleteBooking = (id) => {
  return fetch(baseURL + id, {
    method: 'DELETE'
  })
}