// Creador - Creador concreto

import { IVehicle } from '../vehicles/IVehicle'
import { VehicleAbstractFactory } from '../vehicles/VehicleAbstractFactory'
import { CarEnum } from './CarEnum'
import { LuxuryCar } from './LuxuryCar'
import { SportCar } from './SportCar'

export class CarFactory {
    public getVehicle(type: string): IVehicle {
        switch (type) {
            case CarEnum.SPORT:
                return new SportCar()
            case CarEnum.LUXURY:
                return new LuxuryCar()
            default:
                throw new Error('No existe el tipo de carro')
        }
    }
}
