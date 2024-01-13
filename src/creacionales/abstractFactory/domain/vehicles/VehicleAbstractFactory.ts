// Abstract Factory - Abstract Creador - Abstract Creador concreto

import { BikeFactory } from '../bikes/BikeFactory'
import { CarFactory } from '../cars/CarFactory'
import { IVehicle } from './IVehicle'
import { VehicleEnum } from './VehicleEnum'

export abstract class VehicleAbstractFactory {
    public abstract getVehicle(type: string): IVehicle

    public static getFactory(type: VehicleEnum): VehicleAbstractFactory {
        switch (type) {
            case VehicleEnum.CAR:
                return new CarFactory()
            case VehicleEnum.BIKE:
                return new BikeFactory()
            default:
                throw new Error('No existe el tipo de vehiculo')
        }
    }
}
