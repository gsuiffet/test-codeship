var React = require('react');
var renderer = require('react-test-renderer');
var {App} = require('../app.js');

describe('components', function() {
    describe('<DashboardX/>', function() {
        it('renders correctly', function() {
            var component = renderer.create(App);
            const json = component.toJSON();
            expect(json).toMatchSnapshot();
        });
    });
});