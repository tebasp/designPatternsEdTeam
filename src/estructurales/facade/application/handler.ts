import { PrintFacade } from '../domain/PrintFacade'
import { A } from '../domain/models/A'
import { B } from '../domain/models/B'
import { C } from '../domain/models/C'

export function handler() {
    // Create a new instance of the Facade
    const facade = new PrintFacade(new A(), new B(), new C())
    // Call the Facade
    facade.print()
}

handler()
