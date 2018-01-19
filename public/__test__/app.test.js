import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '../app.js'

describe('components', function() {
    describe('<DashboardX/>', function() {
        it('renders correctly', function() {
            var component = renderer.create(App);
            const json = component.toJSON();
            expect(json).toMatchSnapshot();
        });
    });
});