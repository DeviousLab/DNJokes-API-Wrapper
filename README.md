<div align="center">

  <img src="https://github.com/DeviousLab/DNJokes-API/raw/main/assets/logo.png" alt="logo" width="200" height="auto" />
  <h1>Deez Nuts Jokes API Wrapper</h1>
  
  <p>
    This is a TypeScript/JavaScript wrapper for the Deez Nuts Jokes API. 
    The original repo for the API can be found at <a href="https://github.com/DeviousLab/DNJokes-API">DNJokes-API</a>, also available on <a href="https://rapidapi.com/DeviousLab/api/deez-nuts-jokes">RapidAPI</a>.
  </p>

<!-- Badges -->
<p>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/DeviousLab/DNJokes-API-Wrapper" alt="last update" />
  </a>
  <a href="https://github.com/DeviousLab/DNJokes-API-Wrapper/stargazers">
    <img src="https://img.shields.io/github/stars/DeviousLab/DNJokes-API-Wrapper" alt="stars" />
  </a>
  <a href="https://github.com/DeviousLab/DNJokes-API-Wrapper/issues/">
    <img src="https://img.shields.io/github/issues/DeviousLab/DNJokes-API-Wrapper" alt="open issues" />
  </a>
  <a href="https://github.com/DeviousLab/DNJokes-API-Wrapper/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/DeviousLab/DNJokes-API-Wrapper.svg" alt="license" />
  </a>
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/DeviousLab/DNJokes-API-Wrapper/Release">
  <img alt="Snyk Vulnerabilities for GitHub Repo" src="https://img.shields.io/snyk/vulnerabilities/github/DeviousLab/DNJokes-API-Wrapper">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/DeviousLab/DNJokes-API-Wrapper/Tests?label=tests">
</p>
   
<h4>
    <a href="https://github.com/DeviousLab/DNJokes-API-Wrapper/issues">Report Bug or Suggest Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Tech Stack](#space_invader-tech-stack)
- [Getting Started](#toolbox-getting-started)
  - [Installation](#gear-installation)
  - [Usage](#eyes-usage)
  - [Commands](#triangular_flag_on_post-commands)
  - [Running Tests](#test_tube-running-tests)
- [Contributing](#wave-contributing)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## :star2: About the Project

<!-- TechStack -->

### :space_invader: Tech Stack

  <ul>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
    <li><a href="https://axios-http.com/">Axios</a></li>
    <li><a href="https://mochajs.org/">Mocha</a></li>
  </ul>

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Installation -->

### :gear: Installation

Install DNJokes-API Wrapper with npm

`npm i dnjokes-api-wrapper`

or with yarn

`yarn add dnjokes-api-wrapper`

or use as an inline script with a CDN

```html
<script src="https://cdn.jsdelivr.net/npm/dnjokes-api-wrapper/lib/cjs/index.min.js"></script>
```

<!-- Usage -->

## :eyes: Usage

To use the wrapper, you need to import it into your project.

ESM Module

```javascript
import getAllDNJokes from 'DNJokes-API-Wrapper';

getAllDNJokes().then((res) => {
  console.log(res);
});
```

CommonJS

```javascript
const DNJokes = require('DNJokes-API-Wrapper');

DNJokes.getAllDNJokes().then((res) => {
  console.log(res);
});
```

<!-- Commands -->

### :triangular_flag_on_post: Commands

These are the commands you can use with the wrapper

```javascript
// Get an array of all jokes in the database
getAllDNJokes(max_results: number); // putting a value in the function will define the maximum number of jokes to return

// Get a random joke from the database
getRandomDNJoke();

// Get a joke by ID
getDNJokeById(dn_id: number); // put the ID of the joke you want to get in the function

// Get a joke by search query
getDNJokeByQuery(keyword: string); // put the search query in the function
```

<!-- Running Tests -->

### :test_tube: Running Tests

To run tests, run the following command

```bash
  npm test
```

<!-- Contributing -->

## :wave: Contributing

Contributions are always welcome! Open an issue with any issues or requests!

<!-- License -->

## :warning: License

Distributed under the MIT License. See `LICENSE.md` for more information.

<!-- Contact -->

## :handshake: Contact

[devious@deviouslab.dev](mailto:devious@deviouslab.dev)
[deviouslab.dev](https://deviouslab.dev)

<!-- Acknowledgments -->

## :gem: Acknowledgements

- [Shields.io](https://shields.io/)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
