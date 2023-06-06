const date = new Date();
// Date CheckIn
let checkIn = `${date.getFullYear()}-${
  "0" + (date.getMonth() + 1)
}-${date.getDate()}`;
// Date CheckOut
let checkOut = `${date.getFullYear()}-${"0" + (date.getMonth() + 1)}-${
  date.getDate() + 1
}`;

export { checkIn, checkOut };
