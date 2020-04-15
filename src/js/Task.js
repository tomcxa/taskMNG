export default class Task {
    constructor(name, pined = false) {
        this.name = name;
        this.element = null;
        this.pined = pined;

        this.setupElement();
    }

    setupElement() {
        const el = document.createElement('div');
        el.classList.add('task-box');
        const HTMLtemplate = `<h3>${this.name}</h3><input type="checkbox"/>`;
        el.insertAdjacentHTML('beforeend', HTMLtemplate);
        this.element = el;
    }
}