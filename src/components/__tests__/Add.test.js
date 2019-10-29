import React from 'react';
import { shallow } from 'enzyme';
import { Wrapper } from '../../setupTests';

import Add from '../Add';


describe('Add component', () => {
    it('should render', () => {
        const component = shallow(<Wrapper><Add /></Wrapper>);

        expect(component).toMatchSnapshot();
    });
});
