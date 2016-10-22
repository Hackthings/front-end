import algoliasearch from 'algoliasearch';
import algoliaHelper from 'algoliasearch-helper';
import keys from './keys';

const { index, applicationID, apiKey } = keys.algolia;

export const search = (latitude, longitude) => {
  const client = algoliasearch(applicationID, apiKey);
  client.initIndex(index).setSettings({ ranking: ['geo'] });
  return algoliaHelper(client, index);
};
