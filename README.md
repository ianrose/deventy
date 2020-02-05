# Hello World

This is an example application we use in research sessions to test documentation for GOV.UK Frontend.

It's built using [Eleventy](https://www.11ty.dev/) and based on the [deventy starter project](https://github.com/ianrose/deventy).

## Getting Started

In the terminal, install all dependencies using npm:

```
$ npm install
```

### Developing with a local server

When developing locally, use the built in server which will automatically re-build the site whenever you make changes.

In the terminal, run:

```
$ npm run dev
```

You can then view the website at http://localhost:4000.

### Example application

The site includes:

- a JavaScript file, which is built from `src/scripts/index.js`
- a CSS file, which is built from the Sass file `src/styles/index.scss`

## Configuration

You can configure:

- the site build in `.eleventy.js`
- the JavaScript build pipeline in `webpack.config.js`
