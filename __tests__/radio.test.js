/* global jest describe it expect */

'use strict';

jest.dontMock('../src/radio');
jest.dontMock('../src/classes/ButtonComponent');

describe('Radio', function () {
  it('should work', function () {
    var React = require('react/addons');
    var Radio = require('../src/radio');
    var TestUtils = React.addons.TestUtils;

    var fakeRadio = {
      'First': false,
      'Second': true,
      'Third': false
    };

    var spy = jest.genMockFunction();
    var handleChange = function (value) {
      fakeRadio = value;
      return spy();
    };

    var component = TestUtils.renderIntoDocument(
      <Radio
        label={'Radio'}
        options={fakeRadio}
        onChange={handleChange} />
    );

    expect(React.findDOMNode(component).children.length).toBe(2);

    var labels = TestUtils.scryRenderedDOMComponentsWithTag(component, 'label');
    // Label of button group
    expect(labels[0].getDOMNode().textContent).toBe('Radio');
    // Labels of buttons
    expect(labels[1].getDOMNode().textContent).toBe('First');
    expect(labels[2].getDOMNode().textContent).toBe('Second');
    expect(labels[3].getDOMNode().textContent).toBe('Third');

    // `Second` should be active
    expect(labels[2].getDOMNode().className.indexOf('active')).not.toBe(-1);

    // Simulate click
    // check `handleChange` is called
    TestUtils.Simulate.click(labels[1]);
    expect(spy).toBeCalled();

    // Value have changed
    expect(fakeRadio.First).toBe(true);
    expect(fakeRadio.Second).toBe(false);
    expect(fakeRadio.Third).toBe(false);
  });
});
