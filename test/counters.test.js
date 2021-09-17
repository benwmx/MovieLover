import { moviesCounter, commentsCounter } from '../src/JS/counters.js';

let comments = null;
let movies = null;

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

describe('Movies Counter', () => {
  test('List of Movies', () => {
    movies = [
      {
        title: 'the Godfather',
        image: '##',
        id: 101,
        overview: 'an amazing movie',
        release_date: '1972',
        vote_average: '8.7',
      },
      {
        title: 'the Godfather 2',
        image: '##',
        id: 102,
        overview: 'an amazing movie',
        release_date: '1973',
        vote_average: '8.7',
      },
    ];
    expect(moviesCounter(movies)).toBe(2);
  });
  test('Empty list of Movies', () => {
    movies = [];
    expect(moviesCounter(movies)).toBe(0);
  });
});
