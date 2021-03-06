var assert = require('assert'),
    vows = require('vows'),
    seriousCalculations = require('../');

vows.describe('serious-calculations').addBatch({
  'When performing serious calculations_d20170519': {
    topic: seriousCalculations.performSeriousCalculations(4),
    'result should be valid': function (result) {
      assert.isNumber(result);
      assert.equal(result, 9);
    }
  }
}).export(module);

