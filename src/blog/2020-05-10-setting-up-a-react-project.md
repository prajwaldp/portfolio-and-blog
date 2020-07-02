---
slug: "/setting-up-a-react-project"
createdOn: "2020-05-10"
updatedOn: "2020-05-10"
title: "Setting up a React Project with Webpack"
---

First, let's set up out project directory:

```bash
mkdir my-new-project
cd my-new-project
npm init -y
```

Install all the packages we need.

```bash
npm install --save react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

- Only `react` and `react-dom` are production dependencies.
- `@babel/preset-env` is smart and makes our lives easier according to [babel](https://babeljs.io/docs/en/babel-preset-env). So we use that instead of trying to figure out which ES version and feature-set we want.
- `@babel/preset-react` is for `JSX` that React uses.
- `babel-loader` is the webpack loader for ES6 (and higher) modules.

Our `babel` configuration goes into the file `.babelrc` in the project root.

```json
// .babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

This is our webpack configuration.

```jsx
// webpack.config.js
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
}
```

- The entry file is `src/index.js`, output directory is `dist` , and the output bundle is `dist/bundle.js`
- `js` files are run through the `babel-loader`
- The `HtmlWebpackPlugin` webpack plugin creates the HTML file that serves the bundled JavaScript. The HTML template for this plugin is `src/index.html` and the file that is created after building is `dist/index.html`

The configuration files are dealt with. The following are project source code files.

```jsx
// src/index.js
import React from "react"
import ReactDom from "react-dom"
import App from "./components/App.js"

ReactDom.render(<App />, document.getElementById("app"))
```

```html
<!-- src/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My New Project</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

```jsx
// src/components/App.js
import React from "react"

const App = () => (
  <div>
    <h1>Hello, World!</h1>
  </div>
)

export default App
```

Add the following commands to `package.json`

```json
// package.json
{
  /*
  ...
	*/
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --open --mode development"
  }
  /*
  ...
	*/
}
```

Hit `npm run dev` and start developing the app.

Browse the files at this stage [here](https://github.com/prajwaldp/react-productivity-app/tree/fedc72ab49897af2229bb7edb1605cd2092a15b2).

## Install PostCSS

```bash
npm install —save-dev css-loader style-loader postcss-loader
```

```jsx
// postcss.config.js
module.exports = {
  plugins: [],
}
```

```jsx
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  // ...
}
```

Browse the files at this stage [here](https://github.com/prajwaldp/react-productivity-app/tree/bfa9b24192db588fb0f5d33100f72435f20d8cbd)

## Install Tailwindcss

```bash
npm install tailwindcss
```

```jsx
// postcss.config.js
module.exports = {
  plugins: [require("autoprefixer"), require("tailwindcss")],
}
```

```jsx
// src/components/App.js
import React from "react"
import "./App.css"

const App = () => (
  <div className="p-10 text-center bg-pink-100">
    <h1 className="text-4xl text-gray-700 font-extrabold">Hello, World!</h1>
  </div>
)

export default App
```

```css
/* src/components/App.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create the tailwindcss config file - `tailwind.config.js`. This is needed for the Tailwind CSS IntelliSense plugin to get activated in Visual Studio Code.

```bash
npx tailwind init
```

Browse the files at this stage [here](https://github.com/prajwaldp/react-productivity-app/tree/d06c9d5526328d4e952fa4f407f8030b56a8ffab).
