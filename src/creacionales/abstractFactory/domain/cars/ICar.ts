// Producto Especifico

import { IVehicle } from '../vehicles/IVehicle'

export interface ICar extends IVehicle {
    getDoors(): number
}
