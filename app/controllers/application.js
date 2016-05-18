import Ember from 'ember';

import moment from 'moment';

export default Ember.Controller.extend({
  today: Ember.computed(function() {
    return moment.utc().format('YYYY-MM-DD');
  })
});
