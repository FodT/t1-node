var common = require('./common');

module.exports = {
  'strategy_concept': {
    'id': '/strategy_concept',
    'type': 'object',
    'properties': {
      'concept_id': {
        'id': '/strategy_concept/concept_id',
        'type': 'integer'
      },
      'status': {
        'id': '/strategy_concept/status',
        'type': 'boolean'
      },
      'strategy_id': {
        'id': '/strategy_concept/concept_id',
        'type': 'integer'
      },
      'weighting': {
        'id': '/strategy_concept/weighting',
        'type': 'string'
      },
      'created_on': {
        'id': '/strategy_concept/created_on',
        'type': 'string',
        'format': 'datetimezone',
        'readonly': true
      },
      'updated_on': {
        'id': '/strategy_concept/updated_on',
        'type': 'string',
        'format': 'datetimezone',
        'readonly': true
      }
    },
    'required': [
      'name'
    ]
  },
  'allOf': [
    common.entity,
    {
      '$ref': '#/strategy_concept'
    }
  ]
};
