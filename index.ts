import { Resources } from './src/types';
import { ApiClient } from './src/client';

const client = new ApiClient<Resources>({
	endpoint: 'https://deezjokes.deta.dev',
});

async function getAllDNJokes(max_results: number = 48) {
	const [status, data] = await client.find('jokes', { max_results });
	if (status === 'failed') {
		throw Error(`FAILED: ${data.message}`);
	}
	return data;
}

async function getRandomDNJoke() {
	const [status, data] = await client.find('joke/random');
	if (status === 'failed') {
		throw Error(`FAILED: ${data.message}`);
	}
	return data;
}

async function getDNJokeByQuery(keyword: string) {
	const [status, data] = await client.find('joke/search', { keyword });
	if (status === 'failed') {
		throw Error(`FAILED: ${data.message}`);
	}
	return data;
}

async function getDNJokeById(dn_id: number = 1) {
	const [status, data] = await client.find('joke/', { dn_id });
	if (status === 'failed') {
		throw Error(`FAILED: ${data.message}`);
	}
	return data;
}

export default {
	getAllDNJokes,
	getRandomDNJoke,
	getDNJokeByQuery,
	getDNJokeById,
};
