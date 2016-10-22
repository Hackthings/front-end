import { successAction } from '../../helpers/fluxStandardAction';

export const exampleAction = (payload = '') => {
  return successAction('example', payload);
};
