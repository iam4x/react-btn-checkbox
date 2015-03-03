/* global jest describe it expect */

'use strict';

jest.dontMock('../src/checkbox');
jest.dontMock('../src/mixins/render-buttons');

describe('Checkbox', function () {
  it('should work', function () {
    var React = require('react/addons');
    var Checkbox = require('../src/checkbox');
    var TestUtils = React.addons.TestUtils;

    var fakeCheckBox = {
      'First': false,
      'Second': true,
      'Third': false
    };

    var handleChange = jest.genMockFunction();

    var component = TestUtils.renderIntoDocument(
      <Checkbox
        label={'Checkbox'}
        options={fakeCheckBox}
        onChange={handleChange} />
    );

    expect(component.getDOMNode().children.length).toBe(2);

    var labels = TestUtils.scryRenderedDOMComponentsWithTag(component, 'label');
    // Label of button group
    expect(labels[0].getDOMNode().textContent).toBe('Checkbox');
    // Labels of buttons
    expect(labels[1].getDOMNode().textContent).toBe('First');
    expect(labels[2].getDOMNode().textContent).toBe('Second');
    expect(labels[3].getDOMNode().textContent).toBe('Third');

    // `Second` should be active
    expect(labels[2].getDOMNode().className.indexOf('active')).not.toBe(-1);

    // Simulate click
    // check `handleChange` is called
    TestUtils.Simulate.click(labels[1]);
    expect(handleChange).toBeCalled();
  });
});
