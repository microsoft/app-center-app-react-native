import {addTodo} from '../todo';

test('adds 1 + 2 to equal 3', () => {
  const sum = require('../sum');
  expect(sum(1, 2)).toBe(3);
});

const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  it('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  it('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = "Go to the Vault"
    const id = 1
    const expectedAction = {
      type: 'ADD_TODO',
      text: "Go to the Vault",
      id: 1
    }
    expect(addTodo(text, id)).toEqual(expectedAction)
  })
})