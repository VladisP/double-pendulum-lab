import {Vector4} from './vector.js';

const TIME_STEP = 1 / 60;

const toRad = degrees => degrees * (Math.PI / 180);

export class RungeKuttaSolver {
    a1 = toRad(0);
    a2 = toRad(0);
    p1 = 0;
    p2 = 0;

    setState(a1, a2) {
        this.a1 = toRad(a1);
        this.a2 = toRad(a2);
        this.p1 = 0;
        this.p2 = 0;
    }

    next() {
        const z = Vector4.of(this.a1, this.a2, this.p1, this.p2);
        const y1 = z.f.mulScalar(TIME_STEP);
        const y2 = z.add(y1.mulScalar(0.5)).f.mulScalar(TIME_STEP);
        const y3 = z.add(y2.mulScalar(0.5)).f.mulScalar(TIME_STEP);
        const y4 = z.add(y3).f.mulScalar(TIME_STEP);
        const zNext = y1.add(y2.mulScalar(2)).add(y3.mulScalar(2)).add(y4).mulScalar(1 / 6).add(z);

        this.a1 = zNext.value[0];
        this.a2 = zNext.value[1];
        this.p1 = zNext.value[2];
        this.p2 = zNext.value[3];
    }
}
