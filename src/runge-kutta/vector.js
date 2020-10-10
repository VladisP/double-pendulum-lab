import {L_1, L_2, M_1, M_2} from '../common/constants.js';

const G = 9.81;

export class Vector4 {
    value = [];

    constructor(v1, v2, v3, v4) {
        this.value = [v1, v2, v3, v4];
    }

    static of(v1, v2, v3, v4) {
        return new Vector4(v1, v2, v3, v4);
    }

    get f() {
        return Vector4.of(
            this.f1(this.value),
            this.f2(this.value),
            this.f3(this.value),
            this.f4(this.value),
        );
    }

    f1([a1, a2, p1, p2]) {
        const numerator = p1 * L_2 - p2 * L_1 * Math.cos(a1 - a2);
        const denominator = L_1 * L_1 * L_2 * (M_1 + M_2 * Math.pow(Math.sin(a1 - a2), 2));

        return numerator / denominator;
    }

    f2([a1, a2, p1, p2]) {
        const numerator = p2 * (M_1 + M_2) * L_1 - p1 * M_2 * L_2 * Math.cos(a1 - a2);
        const denominator = L_1 * L_2 * L_2 * M_2 * (M_1 + M_2 * Math.pow(Math.sin(a1 - a2), 2));

        return numerator / denominator;
    }

    f3(z) {
        const [a1] = z;

        return -(M_1 + M_2) * G * L_1 * Math.sin(a1) - this.A1(z) + this.A2(z);
    }

    f4(z) {
        const [, a2] = z;

        return -M_2 * G * L_2 * Math.sin(a2) + this.A1(z) - this.A2(z);
    }

    A1([a1, a2, p1, p2]) {
        const numerator = p1 * p2 * Math.sin(a1 - a2);
        const denominator = L_1 * L_2 * (M_1 + M_2 * Math.pow(Math.sin(a1 - a2), 2));

        return numerator / denominator;
    }

    A2([a1, a2, p1, p2]) {
        const numerator = (
            p1 * p1 * M_2 * L_2 * L_2
            - 2 * p1 * p2 * M_2 * L_1 * L_2 * Math.cos(a1 - a2)
            + p2 * p2 * L_1 * L_1 * (M_1 + M_2)
        ) * Math.sin(2 * (a1 - a2));

        const denominator = 2 * L_1 * L_1 * L_2 * L_2 * Math.pow((M_1 + M_2 * Math.pow(Math.sin(a1 - a2), 2)), 2);

        return numerator / denominator;
    }

    add(v) {
        return Vector4.of(
            this.value[0] + v.value[0],
            this.value[1] + v.value[1],
            this.value[2] + v.value[2],
            this.value[3] + v.value[3],
        )
    }

    mulScalar(scalar) {
        return Vector4.of(
            this.value[0] * scalar,
            this.value[1] * scalar,
            this.value[2] * scalar,
            this.value[3] * scalar,
        )
    }
}
