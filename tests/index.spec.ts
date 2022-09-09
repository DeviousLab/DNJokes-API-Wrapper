import 'mocha';
import { assert } from 'chai';

import {
	getAllDNJokes,
	getDNJokeById,
	getDNJokeByQuery,
	getRandomDNJoke,
} from '../index';
import npmPackage from '../index';

describe('NPM Package', () => {
	it('should be an object', () => {
		assert.isObject(npmPackage);
	});

	it('should have a getAllDNJokes property', () => {
		assert.property(npmPackage, 'getAllDNJokes');
	});

	it('should have a getDNJokeById property', () => {
		assert.property(npmPackage, 'getDNJokeById');
	});

	it('should have a getDNJokeByQuery property', () => {
		assert.property(npmPackage, 'getDNJokeByQuery');
	});

	it('should have a getRandomDNJoke property', () => {
		assert.property(npmPackage, 'getRandomDNJoke');
	});
});

describe('getAllDNJokes Function', () => {
	it('should be a function', () => {
		assert.isFunction(getAllDNJokes);
	});

	it('should return an array of jokes', async () => {
		const expected = {
			data: [
				{
					id: 20,
					prompt: "How do you say 'Yes, I would like some' in Spanish?",
					reply: {
						first: 'Si..',
						second: '(quickly interupt), see deez nuts!',
					},
				},
				{
					id: 1,
					prompt: 'How much did your trip to Dubai cost?',
					reply: {
						first: 'It was pretty expensive.',
						second: 'To buy deez nuts!',
					},
				},
				{
					id: 2,
					prompt: 'Excuse me but do you like Wendys?',
					reply: {
						first: 'Yes why?',
						second:
							'Because you are going to love when deez nuts hit you in the face.',
					},
				},
				{
					id: 3,
					prompt: 'Excuse me but do you Bofa?',
					reply: {
						first: "Bofa? I don't think so?",
						second: 'Bofa deez nuts!',
					},
				},
				{
					id: 4,
					prompt: 'Hey, are you familar with Landon?',
					reply: {
						first: 'Landon who?',
						second: 'Slip, fall then landon deez nuts.',
					},
				},
			],
			count: null,
		};
		const actual = await getAllDNJokes(5);
		assert.deepEqual(actual, expected);
	});
});

describe('getDNJokeById Function', () => {
	it('should be a function', () => {
		assert.isFunction(getDNJokeById);
	});

	it('should return a joke with an id', async () => {
		const expected = {
			data: [
				{
					id: 5,
					prompt: 'Do you remember that guy Willya?',
					reply: {
						first: 'Willya who?',
						second: 'Willya put deez nuts on your chin.',
					},
				},
			],
			count: null,
		};
		const actual = await getDNJokeById(5);
		assert.deepEqual(actual, expected);
	});
});

describe('getDNJokeByQuery Function', () => {
	it('should be a function', () => {
		assert.isFunction(getDNJokeByQuery);
	});

	it('should return a joke with a search query', async () => {
		const expected = [
			{
				id: 7,
				prompt: 'Excuse me but do you like pudding?',
				reply: {
					first: 'Yes, of course.',
					second: 'Well how about pudding deez nuts in your mouth.',
				},
			},
		];
		const actual = await getDNJokeByQuery('pudding');
		assert.deepEqual(actual, expected);
	});
});

// describe('getRandomDNJoke Function', () => {
//   it('should be a function', () => {
//     assert.isFunction(getRandomDNJoke);
//   });

//   it('should return the goodbye message', async () => {
//     const expected = 'Goodbye from my example modern npm package!';
//     const actual = await getRandomDNJoke();
//     assert.equal(actual, expected);
//   });
// });
