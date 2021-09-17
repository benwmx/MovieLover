import commentsCounter from '../src/JS/counters.js';

let comments = null;

describe('Comments Counter', () => {
  test('List of comments', () => {
    comments = [
      {
        comment: 'This is nice!',
        creation_date: '2021-01-10',
        username: 'John',
      },
      {
        comment: 'Great content!',
        creation_date: '2021-02-10',
        username: 'Jane',
      },
    ];
    expect(commentsCounter(comments)).toBe(2);
  });
  test('Empty list of comments', () => {
    comments = [];
    expect(commentsCounter(comments)).toBe(0);
  });
});
