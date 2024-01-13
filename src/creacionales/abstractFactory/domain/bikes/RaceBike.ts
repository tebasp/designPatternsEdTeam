import { IBike } from './IBike'

export class RaceBike implements IBike {
    getEngine(): string {
        return 'Race Bike Engine'
    }
    getSeats() {
        return 1
    }
}
