import { getUsers } from './common/usersAPI';
// import './style.css';
import './style.scss'
console.log('Hello Webpack!');

getUsers().then(json => console.log(json));

const fancyFunc = () => {
  return [1,2];
};

const [a,b] = fancyFunc();