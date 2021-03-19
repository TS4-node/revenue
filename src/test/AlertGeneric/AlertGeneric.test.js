import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from 'enzyme'

import { AlertGeneric } from '../../components';

describe('Test in <AlertGeneric />', () => {
    const severity = 'warning';
    const text = 'text for test';
    const wrapper = shallow(
        <AlertGeneric
            text={text}
            severity={severity}
        />
    );

    test('should show <AlertGeneric /> correctly', () => {

        expect(wrapper).toMatchSnapshot();
    });

});