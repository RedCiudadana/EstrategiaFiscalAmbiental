import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | biblioteca/eje0', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:biblioteca/eje0');
    assert.ok(route);
  });
});
