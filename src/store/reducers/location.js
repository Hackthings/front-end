let initialState = {
  latitude: 0,
  longitude: 0
};

const setLatitude = (state = initialState, latitude = 0) => {
  return {
    ...state,
    latitude
  };
};

const setLongitude = (state = initialState, longitude = 0) => {
  return {
    ...state,
    longitude
  };
};

/**
 * Set both lat and long via a comma separated pair (e.g. 52.4759874,-1.9120821)
 */
const setLatLongPair = (state = initialState, latitude = 0, longitude = 0) => {
  return state;
};

export const location = (state = initialState, action) => {
  switch (action.type) {
    case 'set_latitude':
      return setLatitude(state, action.payload);
    case 'set_longitude':
      return setLongitude(state, action.payload);
    case 'set_location':
      return setLatLongPair(state, action.payload);
    default:
      return state;
  }
};
