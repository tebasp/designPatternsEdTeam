import { IBike } from './IBike'

export class SportBike implements IBike {
    getEngine(): string {
        return 'Sport Bike Engine'
    }
    getSeats() {
        return 2
    }
}
