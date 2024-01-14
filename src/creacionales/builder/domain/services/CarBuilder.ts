// Concrete Builder
import { Action, Builder } from '../interfaces/builder'
import { Car } from '../models/Car'

export class CarBuilder implements Builder {
    private actions: Action[]
    private car: Car

    constructor() {
        this.actions = []
        this.car = new Car()
    }

    loadActions(actions: Action[]): void {
        this.actions = actions
    }

    build(): void {
        this.actions.forEach((action: Action) => {
            switch (action.action) {
                case 1:
                    this.car.setChassis(action.value.toString())
                    break
                case 2:
                    this.car.setWheels(parseInt(action.value.toString()))
                    break
                case 3:
                    this.car.setColor(action.value.toString())
                    break
                case 4:
                    this.car.setDoors(parseInt(action.value.toString()))
                    break
                default:
                    console.info('Action not found')
            }
        })
    }

    reset(): void {
        this.actions = []
        this.car = new Car()
    }

    getProduct(): Car {
        const product: Car = this.car
        this.reset()
        return product
    }
}
