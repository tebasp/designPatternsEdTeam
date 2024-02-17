// Concrete Strategy

import { Strategy } from '../interfaces/Strategy'

export class AddStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a + b
    }
}
