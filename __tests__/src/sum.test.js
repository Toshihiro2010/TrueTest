import { sum } from '../../src/common/sum'

it('test Sum 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
})

it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

it('object assignment', () => {
    const data = { one: 1 };
    data.two = 2
    expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});