import { IVehicle } from '../vehicles/IVehicle'
import { VehicleAbstractFactory } from '../vehicles/VehicleAbstractFactory'
import { BikeEnum } from './BikeEnum'
import { IBike } from './IBike'
import { RaceBike } from './RaceBike'
import { SportBike } from './SportBike'

export class BikeFactory {
    public getVehicle(type: string): IVehicle {
        switch (type) {
            case BikeEnum.SPORT:
                return new SportBike()
            case BikeEnum.RACE:
                return new RaceBike()
            default:
                throw new Error('No existe el tipo de moto')
        }
    }
}
