---
slug: "/setting-up-a-react-project"
createdOn: "2020-05-10"
updatedOn: "2020-05-10"
title: "Setting up a React Project with Webpack"
---

Introduction paragraphs are not my forte. With this guide, I hope I make things
easier for myself when I start my next JavaScript project.

> Pro Tip: Don't read all this text. Just copy-paste the commands and code.

So let's begin.

### But, before that

We need to install the package `webpack-cli` **globally**

```shell
npm install -g webpack-cli
```

### Let's actually begin

As always, the first step is to make a project directory and initialize our project.

```shell
mkdir my-new-project
cd my-new-project
npm init -y
```

_Hint: Skip the `-y` flag to customize the `package.json` created. I like to keep
the first version at `0.0.1`_

Let's install our packages.

```shell
npm install --save react react-dom
npm install --save-dev webpack webpack-dev-server html-webpack-plugin
npm install --save-dev babel-loader @babel/core
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react
```

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react]
}
```
