let initialState = {
  latitude: 0,
  longitude: 0
};

const setLocation = (state = initialState, latitude = 0, longitude = 0) => {
  return {
    latitude,
    longitude
  };
};

export const location = (state = initialState, action) => {
  switch (action.type) {
    case 'set_location':
      return setLocation(state, action.payload.latitude, action.payload.longitude);
    default:
      return state;
  }
};
