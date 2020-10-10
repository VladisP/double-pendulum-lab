import {L_1, L_2, M_1, M_2} from '../common/constants.js';

const INIT_POINT_RADIUS = 4;
const POINT_RADIUS = 16;
const LINE_WIDTH = 3;
const SCALE_FACTOR = 200;
const POINT_COLOR = '#90EE02';
const LINE_COLOR = '#6002EE';

export class Canvas {
    constructor({width, height}) {
        this.instance = document.createElement('canvas');
        this.context = this.instance.getContext('2d');
        this.width = width;
        this.height = height;

        this.context.canvas.width = this.width;
        this.context.canvas.height = this.height;

        this.context.translate(this.width / 4, this.height / 2);

        this.context.strokeStyle = LINE_COLOR;
        this.context.fillStyle = POINT_COLOR;
        this.context.lineWidth = LINE_WIDTH;
    }

    draw(a1, a2) {
        const x1 = this.getX1(a1);
        const y1 = this.getY1(a1);
        const x2 = this.getX2(a1, a2);
        const y2 = this.getY2(a1, a2);

        this.context.clearRect(-this.width / 4, -this.height / 2, 2 * this.width, 2 * this.height);

        // init point
        this.context.beginPath();
        this.drawPoint(0, 0, INIT_POINT_RADIUS);
        this.context.fill();

        // first line
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(x1, y1);
        this.context.stroke();

        // first point
        this.context.beginPath();
        this.drawPoint(x1, y1, POINT_RADIUS * M_1);
        this.context.fill();

        // second line
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();

        // second point
        this.context.beginPath();
        this.drawPoint(x2, y2, POINT_RADIUS * M_2);
        this.context.fill();
    }

    drawPoint(x, y, radius) {
        this.context.arc(x, y, radius, 0, Math.PI * 2, true);
    }

    getX1(a1) {
        return (Math.sin(a1) * L_1) * SCALE_FACTOR;
    }

    getX2(a1, a2) {
        return (Math.sin(a1) * L_1 + Math.sin(a2) * L_2) * SCALE_FACTOR;
    }

    getY1(a1) {
        return (Math.cos(a1) * L_1) * SCALE_FACTOR;
    }

    getY2(a1, a2) {
        return (Math.cos(a1) * L_1 + Math.cos(a2) * L_2) * SCALE_FACTOR;
    }
}
