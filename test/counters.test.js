import { moviesCounter } from '../src/JS/counters.js';

let movies = null;
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