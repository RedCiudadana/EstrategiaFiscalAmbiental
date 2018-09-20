'use strict';

define('estrategia-fiscal-ambiental/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/biblioteca.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/biblioteca.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/legislativo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/legislativo.js should pass ESLint\n\n');
  });

  QUnit.test('routes/nosotros.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/nosotros.js should pass ESLint\n\n');
  });

  QUnit.test('routes/objetivo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/objetivo.js should pass ESLint\n\n');
  });
});
define('estrategia-fiscal-ambiental/tests/test-helper', ['estrategia-fiscal-ambiental/app', 'estrategia-fiscal-ambiental/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('estrategia-fiscal-ambiental/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/biblioteca-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/biblioteca-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/legislativo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/legislativo-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/nosotros-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/nosotros-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/objetivo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/objetivo-test.js should pass ESLint\n\n');
  });
});
define('estrategia-fiscal-ambiental/tests/unit/routes/biblioteca-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | biblioteca', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:biblioteca');
      assert.ok(route);
    });
  });
});
define('estrategia-fiscal-ambiental/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('estrategia-fiscal-ambiental/tests/unit/routes/legislativo-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | legislativo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:legislativo');
      assert.ok(route);
    });
  });
});
define('estrategia-fiscal-ambiental/tests/unit/routes/nosotros-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | nosotros', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:nosotros');
      assert.ok(route);
    });
  });
});
define('estrategia-fiscal-ambiental/tests/unit/routes/objetivo-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | objetivo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:objetivo');
      assert.ok(route);
    });
  });
});
define('estrategia-fiscal-ambiental/config/environment', [], function() {
  var prefix = 'estrategia-fiscal-ambiental';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('estrategia-fiscal-ambiental/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
