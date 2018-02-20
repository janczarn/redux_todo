# redux_todo

This repository contains the code for the todo app example in the Introduction
to Redux IGM talk.

To run the code, first download and install [Node.js](https://nodejs.org/en/).
I would opt for the most recent LTS version. It can also be downloaded using
Homebrew:

```
brew install node
```

Then run:

```
npm install
```

This will download the packages specified in the package-lock.json file into the
node_modules directory. Then run:

```
npm run build
```

This will execute Webpack and build the client Javascript file. Then run:

```
npm run server
```

This will start the web server. Go to https://localhost:3000 in a web browser
to see the app.
