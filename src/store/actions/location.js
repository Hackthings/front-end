import { successAction } from '../../helpers/fluxStandardAction';

export const setLatitude = (payload = 0) => {
  return successAction('set_latitude', payload);
};

export const setLongitude = (payload = 0) => {
  return successAction('set_longitude', payload);
};

/**
 * Set both lat and long via a comma separated pair (e.g. 52.4759874,-1.9120821)
 */
export const setLocation = (payload = '') => {
  return successAction('set_longitude', payload);
};
