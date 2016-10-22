// Template for a Flux Standard Action
// More info: https://github.com/acdlite/flux-standard-action
const FLUX_STANDARD_ACTION = {
  type: '',
  payload: {},
  error: false,
  meta: {
    timestamp: Date.now()
  }
};

export const successAction = (type, payload = {}) => {
  let action = FLUX_STANDARD_ACTION

  action.type = type
  action.payload = payload
  action.error = false

  return action
};

export const errorAction = (type, message = 'Error', payload = {}) => {
  let action = FLUX_STANDARD_ACTION

  action.type = type
  action.payload.error = new Error(message)
  action.payload.data = payload
  action.error = true

  return action
};
