# Edunet MERN Stack Development Internship

## Task 3: State Management with React Hooks

### Project Overview

This project demonstrates state management in React using React Hooks. The application implements a dynamic counter that updates in real time and showcases the use of both useState and useEffect hooks.

---

## Objective

* Learn React Hooks
* Manage component state using useState
* Handle side effects using useEffect
* Build a dynamic counter application

---

## Technologies Used

* React.js
* Vite
* JavaScript ES6
* Tailwind CSS

---

## Features

* Increment Counter
* Decrement Counter
* Reset Counter
* Dynamic UI Updates
* Browser Title Updates
* Console Logging with useEffect

---

## React Hooks Used

### useState

Used to store and update the counter value.

Example:

```jsx
const [count, setCount] = useState(0);
```

### useEffect

Used to perform side effects whenever the counter changes.

Example:

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

---

## Project Structure

```text
src/
│
├── components/
│   └── Counter.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

```bash
npm install
npm run dev
```

---

## Output

* Counter value updates dynamically.
* Browser title updates automatically.
* Console logs state changes.

---

## Learning Outcomes

* Understanding React State
* Understanding Side Effects
* Using React Hooks
* Managing Dynamic UI Data

---

## Conclusion

Successfully implemented state management in React using useState and useEffect. Built a fully functional counter application demonstrating dynamic frontend data flow and side-effect handling.
