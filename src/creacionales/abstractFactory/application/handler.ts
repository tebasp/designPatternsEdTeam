import { VehicleAbstractFactory } from '../domain/vehicles/VehicleAbstractFactory'
import { VehicleEnum } from '../domain/vehicles/VehicleEnum'

export function handler() {
    const carFactory = VehicleAbstractFactory.getFactory(VehicleEnum.CAR)
    const carEngine = carFactory.getVehicle('SPORT').getEngine()
    console.log('\nCar Engine', carEngine)
}

handler()
