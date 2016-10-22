import { successAction } from '../../helpers/fluxStandardAction';

/**
 * Set both lat and long (e.g. 52.4759874,-1.9120821)
 */
export const setLocation = (latitude = 0, longitude = 0) => {
  return successAction('set_location', { latitude, longitude });
};
