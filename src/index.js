// USING ES6 MODULES
// import { getUsers } from './common/usersAPI';

// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//   getUsers().then(json => console.log(json));
// })

// USING DYNAMIC IMPORTS
//  create a function to load the module dynamically
const getUserModule = () => import(/* webpackChunkName: "usersAPI" */'./common/usersAPI');

const btn = document.getElementById('btn');

// in the event listener we chain then() to the dynamic import
btn.addEventListener('click', () => {
  // This gives the ability to extract our getUsers function with object destructuring
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.log(json));
  });
});