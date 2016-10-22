import algoliasearch from 'algoliasearch';
import algoliaHelper from 'algoliasearch-helper';
import keys from './keys';

const { index, applicationID, apiKey } = keys.algolia;
// console.log('applicationID', applicationID);
// console.log('apiKey', apiKey);

export const search = (latitude, longitude) => {
  const client = algoliasearch(applicationID, apiKey);
  client.initIndex(index).setSettings({ ranking: ['geo'] });
  // const helper = algoliaHelper(client, index);
  return algoliaHelper(client, index);
};
