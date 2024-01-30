// Concrete template

import { AbstractCalc } from './AbstractCalc'

export class Negative extends AbstractCalc {
    add(num: number): number {
        return num + 0
    }

    substract(num: number): number {
        return num - 5
    }
}
