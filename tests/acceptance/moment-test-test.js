import { test } from 'qunit';
import moduleForAcceptance from 'ember-moment-now-issue/tests/helpers/module-for-acceptance';

import moment from 'moment';

let originalMomentNow;
moduleForAcceptance('Acceptance | Moment Test', {
  beforeEach() {
    originalMomentNow = moment.now;
    moment.now = () => +new Date('2016-01-01');
  },

  afterEach() {
    moment.now = originalMomentNow;
  }
});

test('moment overwrite works in test', function(assert) {
  assert.equal(moment.utc().format('YYYY-MM-DD'), '2016-01-01');
});

test('moment overwrite works in helper', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal($('#moment-helper-test').text().trim(), '2016-01-01');
  });
});

test('moment overwrite works in JavaScript', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal($('#moment-javascript-test').text().trim(), '2016-01-01');
  });
});
