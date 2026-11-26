# todoapp

> A clean **drag-and-drop to-do list** built with React Hooks and Material-UI.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=flat&logo=mui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**[▶ Live demo](https://patrykskrucha.github.io/todoapp/)**

## Features

- add, edit and delete tasks
- **reorder tasks by dragging** them (react-beautiful-dnd)
- edit a task in a modal dialog, confirm with Enter
- snackbar notification after deleting a task
- tasks are saved in **localStorage**, so they survive a page refresh

## Tech stack

React 16 (function components and Hooks) · Material-UI · react-beautiful-dnd · styled-components · deployed with gh-pages

## Run locally

```bash
npm install
npm start          # dev server on http://localhost:3000
npm run build      # production build
npm run deploy     # publish to GitHub Pages
```

## Structure

```
src/
├── containers/App.js
└── components/
    ├── ToDoApp/     # state, localStorage, drag-and-drop logic
    ├── Input/       # new task field
    ├── Tasks/       # list and single task
    ├── Modal/       # edit dialog
    └── Snackbar/    # delete notification
```
