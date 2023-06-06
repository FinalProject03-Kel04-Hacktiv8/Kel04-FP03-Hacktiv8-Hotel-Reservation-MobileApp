const searchLocations = (location) => {
  return {
    method: "GET",
    url: "https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete",
    params: {
      text: location,
      languagecode: "en-us",
    },
    headers: {
      "X-RapidAPI-Key": "31cbb47e4cmsh598a33d934b86e8p153ef7jsn36f2066cbe7d",
      "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
    },
  };
};

export default searchLocations;
