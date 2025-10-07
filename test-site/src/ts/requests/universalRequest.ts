import { QueryTrigger, UniversalSearchRequest } from 'anguyen-search-core-testtt';

const universalRequest: UniversalSearchRequest = {
  query: 'office near me',
  queryTrigger: QueryTrigger.Initialize,
  sessionTrackingEnabled: true,
  context: {
    entityId: '3942',
    randomize: true,
  },
  location: {
    latitude: 0.0,
    longitude: 0.0,
  },
  referrerPageUrl: 'www.google.com/answers/not/ads',
  restrictVerticals: ['faqs'],
  additionalHttpHeaders: {
    'Client-SDK': {
      CORE_TEST_SITE: 'test'
    }
  }
};

export default universalRequest;
