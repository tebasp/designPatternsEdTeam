// Producto concreto

import { ICar } from './ICar'

export class LuxuryCar implements ICar {
    getEngine(): string {
        return 'Luxury Car Engine'
    }
    getDoors() {
        return 4
    }
}
