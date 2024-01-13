// Producto concreto

import { ICar } from './ICar'

export class SportCar implements ICar {
    getEngine(): string {
        return 'Sport Car Engine'
    }
    getDoors() {
        return 2
    }
}
