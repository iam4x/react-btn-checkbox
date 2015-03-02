/* global jest describe it expect */

'use strict';

jest.dontMock('../src/checkbox');

describe('Checkbox', function () {

  it('should work', function () {
    var React = require('react/addons');
    var Checkbox = require('../src/checkbox');
    var TestUtils = React.addons.TestUtils;

    var component = TestUtils.renderIntoDocument(
      <Checkbox />
    );

    expect(component.getDOMNode().textContent).toEqual('Checkbox');
  });
});
