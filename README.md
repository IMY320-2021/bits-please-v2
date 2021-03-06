![GitHub Workflow Status](https://img.shields.io/github/workflow/status/IMY320-2021/bits-please-v2/CodeQL?label=CodeQL&style=for-the-badge) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/IMY320-2021/bits-please-v2/Node.js%20CI?label=Node.js%20CI&style=for-the-badge)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_message=online&url=https%3A%2F%2Fimy320-2021.github.io%2Fbits-please-v2%2F)

# Bits Please

### An ecommerce’s website for our self-made content creation company.

The website was made using ReactJS, and is hosted on GitHub Pages at [https://imy320-2021.github.io/bits-please-v2/](https://imy320-2021.github.io/bits-please-v2/)

### Members

| Student Number | Name                                                  | Role                       |
| -------------- | ----------------------------------------------------- | -------------------------- |
| U18163841      | [Christoff Linde](https://github.com/christoff-linde) | Development, CI/CD         |
| U18219285      | [Jd Perumal](https://github.com/JdPerumal)            | Development, Documentation |
| U18292705      | [Chanel Mulder](https://github.com/ChanelMulder)      | UI Design, User Testing    |
| U19004232      | [Gerard Nagura](https://github.com/MaverickGDN0403)   | UI Design, User Testing    |

### List of Changes Document

A document containing a [List of Changes](https://github.com/IMY320-2021/bits-please-v2/blob/main/CHANGES.md) since the first feedback meeting.

---

## Code Style Guide

### File Naming

For all files and classes, use `PascalCase`.

```
FileName.js
```

### Folder Structure

```
├ src
├── assets              // Folder for all assets (for e.g., images, icons, etc.)
├── components
├──── ComponentName     // Separate folder for each component
├────── Component.css
├────── Component.js
├── pages
├──── PageName          // Separate folder for each page
├────── Page.css
├────── Page.js
├ App.css
├ App.js
├ index.css
├ index.js
```

## Branching Strategy

```
├ main
├── develop
├──── develop_feature/feature-name
├── fix
├──── develop_fix/fix-name
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

The project is linted using `eslint` to ensure that code is written in a consistent style, and to prevent errors or bad coding practices.

### `yarn lint:fix`

The project is linted using `eslint` to ensure that code is written in a consistent style, and to prevent errors or bad coding practices.

Where possible, the linting errors and warings are automatically fixed.

### `yarn format`

All code in the project is formatted using `Prettier` to ensure a consistent code style
