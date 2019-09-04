import data from './data';

describe('data', () => {
  test('adds 1 to every field', () => {
    expect(data(1)).toEqual([
      ['col11', 'col21', 'col31'],
      ['11', '21', '31'],
      ['111', '121', '131'],
      ['211', '221', '231'],
    ]);
  });
});
