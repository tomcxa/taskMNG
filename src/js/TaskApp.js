/* eslint-disable class-methods-use-this */
import Task from './Task';

export default class TaskApp {
    constructor(container) {
        this.container = container;
        this.tasksList = [];
    }

    init() {
        const inputTask = document.getElementById('input-task');
        const serchField = document.getElementById('search');
        const pinedTasks = document.querySelector('.pined-tasks');
        const allTasks = document.querySelector('.all-tasks');

        inputTask.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const name = inputTask.value.trim();
                if (name) {
                    const task = new Task(name);
                    inputTask.value = '';
                    allTasks.appendChild(task.element);
                }
            }
        });

        allTasks.addEventListener('change', (event) => {
            const pined = event.target.closest('.task-box');
            pined.remove();
            pinedTasks.insertAdjacentElement('beforeend', pined);
        });

        pinedTasks.addEventListener('change', (event) => {
            const unpined = event.target.closest('.task-box');
            unpined.remove();
            allTasks.insertAdjacentElement('beforeend', unpined);
        });

        serchField.addEventListener('input', (event) => {
            const tasks = allTasks.getElementsByClassName('task-box');
            [...tasks].forEach((task) => {
                const text = task.getElementsByTagName('h3')[0].textContent;
                const reg = new RegExp(`^(${event.currentTarget.value})`);
                if (event.currentTarget.value && !reg.test(text)) {
                    task.classList.add('hidden');
                }
                if (!event.currentTarget.value) {
                    task.classList.remove('hidden');
                }
            });

            if ([...tasks].every((task) => task.classList.contains('hidden'))) {
                if (!document.getElementById('no-found')) {
                    allTasks.insertAdjacentHTML('beforeend', '<span id="no-found">No tasks found</span>');
                }
            } else {
                document.getElementById('no-found').remove();
            }
        });
    }
}
