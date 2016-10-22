import { successAction } from '../helpers/fluxStandardAction';

export const exampleAction = (payload = '') => {
  console.log('example action');
  return successAction('example', payload);
};
