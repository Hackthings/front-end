let initialState = '';

const exampleReducer = (state = initialState, payload = '') => {
  return payload;
};

export const example = (state = initialState, action) => {
  switch (action.type) {
    case 'example':
      return exampleReducer(state, action.payload);
    default:
      return state;
  }
};
