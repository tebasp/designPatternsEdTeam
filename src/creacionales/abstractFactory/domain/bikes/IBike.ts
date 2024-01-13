import { IVehicle } from '../vehicles/IVehicle'

export interface IBike extends IVehicle {
    getSeats(): number
}
