
import React from 'react';
import Header from '../../src/component/Header';

import { render, fireEvent } from '@testing-library/react-native';

describe('render HeaderComponent', () => {
    test('add func on add', () => {
        const mockFn = jest.fn();
        const { getAllByA11yLabel, getByText } = render(
            <Header onAdd={mockFn} />
        );

        const answerInputs = getAllByA11yLabel('headerInput');
        fireEvent.changeText(answerInputs[0], 'toshihiro');
        fireEvent.press(getByText('Add Shopping Cart'));

        expect(mockFn).toBeCalledWith('toshihiro');
    });
    test('not func on add', () => {
        const { getAllByA11yLabel, getByText } = render(
            <Header />
        );
        const answerInputs = getAllByA11yLabel('headerInput');
        fireEvent.changeText(answerInputs[0], 'toshihiro');
        fireEvent.press(getByText('Add Shopping Cart'));

    });
});


