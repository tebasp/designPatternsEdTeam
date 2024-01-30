// Concrete template

import { AbstractCalc } from './AbstractCalc'

export class Positive extends AbstractCalc {
    add(num: number): number {
        return num + 5
    }
    substract(num: number): number {
        return num - 0
    }
}
