import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Main from '../src/screen/Main';


test('Main Component', () => {
    const allQuestions = ['q1', 'q2', 'q3'];
    const product = [
        {
            productName: "Orange",
            status: "active"
        },
        {
            productName: "Apple",
            status: "active"
        }
    ]
    // let component = renderer.create(<Main product={product} />);

    const mockFn = jest.fn();

    const { getAllByA11yLabel, getByText } = render(
        <Main actionAddProduct={mockFn} product={product} />
    );

    // const answerInputs = getAllByA11yLabel('answer input');

    // fireEvent.changeText(answerInputs[0], 'a1');
    // fireEvent.changeText(answerInputs[1], 'a2');
    // fireEvent.changeText(answerInputs[2], 'a3');

    // expect(mockFn).toBeCalledWith({
    //     '1': { q: 'q1', a: 'a1' },
    //     '2': { q: 'q2', a: 'a2' },
    //     '3': { q: 'q3', a: 'a3' }
    // });
});