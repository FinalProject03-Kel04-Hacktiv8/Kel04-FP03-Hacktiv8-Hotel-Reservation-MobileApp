import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // booked: [
  //   {
  //     name: "Ardi",
  //     email: "ardi@gmail.com",
  //     phone: "+6282274022132",
  //     data: {
  //       id: 1,
  //       img: 'https://th.bing.com/th/id/OIP.ZO7MrIVkK21t63Q0K8-obwHaFe?pid=ImgDet&rs=1',
  //       title: 'Garden Hotel',
  //       location: 'Lake Mary, Florida',
  //       rate: '2.5',
  //       price: '250',
  //     }
  //   },
  //   {
  //     name: "Ghaly",
  //     email: "ghaly@gmail.com",
  //     phone: "+6282387873223",
  //     data: {
  //       id: 2,
  //       img: 'https://th.bing.com/th/id/OIP.S6FljC55M8zaIQmraAGBrgHaE8?pid=ImgDet&rs=1',
  //       title: 'Hotel Dreams',
  //       location: 'New Castle, Indiana',
  //       rate: '3.5',
  //       price: '300',
  //     }
  //   },
  //   {
  //     name: "Eki",
  //     email: "eki@gmail.com",
  //     phone: "+62899887887",
  //     data: {
  //       id: 3,
  //       img: ''
  //       title: 'Rose Garden Hotel',
  //       location: 'Matawan, New Jersey',
  //       rate: '4',
  //       price: '325',
  //     }
  //   },
  // ],
  booked: [],
}

const bookSlice = createSlice({
  name: 'booked',
  initialState,
  reducers: {
    onHandleCheckout: (state, action) => {
      state.booked.push(action.payload)
    }
  },
})

export const { onHandleCheckout } = bookSlice.actions
export default bookSlice.reducer