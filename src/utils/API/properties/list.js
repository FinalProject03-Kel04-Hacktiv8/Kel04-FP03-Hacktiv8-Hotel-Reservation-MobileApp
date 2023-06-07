const List = (checkIn, checkOut, dest_ids, dest_type, guest_qty) => {
  return {
    method: "GET",
    url: "https://apidojo-booking-v1.p.rapidapi.com/properties/list",
    params: {
      offset: "0",
      arrival_date: checkIn,
      departure_date: checkOut,
      guest_qty: guest_qty,
      dest_ids: dest_ids,
      room_qty: "1",
      search_type: dest_type,
      children_qty: "2",
      children_age: "5,7",
      search_id: "none",
      price_filter_currencycode: "USD",
      order_by: "popularity",
      languagecode: "en-us",
      travel_purpose: "leisure",
    },
    headers: {
      "X-RapidAPI-Key": "b347bc0983mshe9d646e8a29ed83p1b05b4jsn708feff2a216",
      "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
    },
  };
};

export default List;
