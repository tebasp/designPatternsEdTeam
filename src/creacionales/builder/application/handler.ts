import { BuilderDirector } from '../domain/services/BuilderDirector'
import { CarBuilder } from '../domain/services/CarBuilder'

function handler() {
    // Create a car manually
    // We use the director but could be done directly with the builder
    const carBuilder = new CarBuilder()
    const director = new BuilderDirector()

    director.setBuilder(carBuilder)

    director.loadAction({ action: 1, value: 'Sedan' })
    director.loadAction({ action: 2, value: 4 })
    director.loadAction({ action: 3, value: 'Red' })
    director.loadAction({ action: 4, value: 4 })
    director.loadAction({ action: 5, value: 'V6' })

    director.setActions()
    director.build()

    const builtCar = carBuilder.getProduct()
    console.log('\nBuilt Car', builtCar)

    // Create a car with the director
    const director2 = new BuilderDirector()
    director2.setBuilder(carBuilder)

    director2.buildSportCar()
    const builtSportCar = carBuilder.getProduct()
    console.log('\nBuilt SPort Car', builtSportCar)
}

handler()
