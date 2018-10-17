import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mision', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mision');
    assert.ok(route);
  });
});
