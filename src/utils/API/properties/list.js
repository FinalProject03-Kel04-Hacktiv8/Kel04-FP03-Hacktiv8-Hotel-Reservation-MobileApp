const List = (checkIn, checkOut) => {
  return {
    method: "GET",
    url: "https://apidojo-booking-v1.p.rapidapi.com/properties/list",
    params: {
      offset: "0",
      arrival_date: checkIn,
      departure_date: checkOut,
      guest_qty: "1",
      dest_ids: "-3712125",
      room_qty: "1",
      search_type: "city",
      children_qty: "2",
      children_age: "5,7",
      search_id: "none",
      price_filter_currencycode: "USD",
      order_by: "popularity",
      languagecode: "en-us",
      travel_purpose: "leisure",
    },
    headers: {
      "X-RapidAPI-Key": "5a32622e46msha12c1569680d7cbp1eccd7jsn8cb3fb91e654",
      "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
    },
  };
};

export default List;
