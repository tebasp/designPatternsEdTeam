// Concrete strategy

import { Strategy } from '../interfaces/Strategy'

export class SubtractStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a - b
    }
}
