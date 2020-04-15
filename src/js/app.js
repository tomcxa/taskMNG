import TaskApp from './TaskApp';

// eslint-disable-next-line no-console
console.log('it works!');
const container = document.querySelector('.app-container');
const app = new TaskApp(container);
app.init();
