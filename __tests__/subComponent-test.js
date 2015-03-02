jest.dontMock('../src/subComponent');

describe('SubComponent', function() {

  it('should work', function() {
    var React = require('react/addons');
    var SubComponent = require('../src/subComponent');
    var TestUtils = React.addons.TestUtils;

    var component = TestUtils.renderIntoDocument(
      <SubComponent />
    );

    expect(component.getDOMNode().textContent).toEqual('A component');
  });
});
