var algolia = require('algoliasearch');
var algoliaHelper = require('algoliasearch-helper');
// import { credentials, indexName } from './constants';

// const { appId, apiKey } = credentials;

var client = algolia('7XPT3R72U9', '561b1f2a0ff050646287da9102a54709');
client.initIndex('locations').setSettings({ ranking: ['geo'] });
var helper = algoliaHelper(client, 'locations');

helper.on('result', content => {
  content.hits.forEach(hit => {
    var distance = hit._rankingInfo.matchedGeoLocation.distance;
    console.log('\nhit: ', hit);
    console.log('distance: ', distance);
  });
});

helper.setQueryParameter('aroundRadius', 3 * 1000);

helper.setQueryParameter('aroundLatLng', '52.47692018502711, -1.8878567218780518');

helper.setQueryParameter('getRankingInfo', true);

helper.search();
