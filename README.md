# Personal Website

**Working on a new UI**

Checkout [Live Preview](https://sammaji.pages.dev)

## Preview

![Home Component](https://user-images.githubusercontent.com/116789799/216755870-08b70d8a-4d09-46c9-b64a-57347621dd85.png)
![Repositories Component](https://user-images.githubusercontent.com/116789799/216760692-d46e4db1-3d73-4e39-808a-29ff91e36fbe.png)

## Getting Started

First clone this project. You can also fork this project and then clone the fork. Then install all required packages. Make sure you have node and installed. If not check out [how to install node js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [how to install yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

```gitattributes
# cloning the project
git clone "https://github.com/samyabrata-maji/sammaji.github.io.git"

# install Yarn (if you have Yarn 
# already installed, ignore this step)
npm install --global yarn

# installing packages
cd <PROJECT_NAME>
yarn install
```

To start the application in **development mode**, run:

```gitattributes
yarn dev
```

To create a **production build**, run:

```gitattributes
yarn build
yarn preview
```

## Customize Website

To add your own repository, go to `src/user.js` and add your github username.

```javascript
const USERNAME = {
  github: "samyabrata-maji", // <-- add your github username here
  twitter: "sammaji15", // <-- add your twitter username here and so on...
  linkedin: "samyabrata-maji",
};
```

You can also customize some properties in `user.js`. For example, to include forked repositories, just include `showForkedRepos: true` in `settings`

```javascript
const settings = {
  showForkedRepos: true,
};
```

To hide forks count, just add `showForksCount: false`

```javascript
const settings = {
  showStarsCount: false,
  showForksCount: false,
  showForkedRepos: true,
};
```
