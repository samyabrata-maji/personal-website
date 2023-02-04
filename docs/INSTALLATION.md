# Installation

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
serve -s build
```