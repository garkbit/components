import React from 'react';
import renderer from 'react-test-renderer';
import Collapsible from './index';
import { shallow } from 'enzyme';

describe('Collapsible', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Collapsible />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('mounts correctly', () => {
        const collapsible = shallow(<Collapsible />);
        expect(collapsible.hasClass('brew-Collapsible')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const collapse = shallow(<Collapsible className={className} />);
        expect(collapse.hasClass(className)).toBe(true);
    });

});