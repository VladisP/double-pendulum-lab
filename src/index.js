import {Canvas} from './canvas/canvas.js';
import {RungeKuttaSolver} from './runge-kutta/runge-kutta.js';
import {createInputForm} from './input-form/input-form.js';

const solver = new RungeKuttaSolver();

const inputForm = createInputForm(solver.setState.bind(solver));
document.body.appendChild(inputForm);

const canvas = new Canvas({width: window.innerWidth, height: window.innerHeight});
document.body.appendChild(canvas.instance);

window.requestAnimationFrame(function drawSystem() {
    solver.next();
    canvas.draw(solver.a1, solver.a2);
    window.requestAnimationFrame(drawSystem);
});
