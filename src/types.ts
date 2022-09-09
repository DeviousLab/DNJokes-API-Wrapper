//Array of jokes structure
export interface Jokes {
  data:  Joke[];
  count: null;
}

//Singular joke structure
export interface Joke {
  id:     number;
  prompt: string;
  reply:  Reply;
}

//Reply to initial prompt structure
export interface Reply {
  first:   string;
  second:  string;
  third?:  string;
  fourth?: string;
}

//Array of categories structure
export type Resources = {
  jokes: Jokes;
  "joke/random": Jokes;
  "joke/search": Joke;
  "joke/": Jokes
}