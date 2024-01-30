// Concrete Subscriber

import { Subscriber } from '../interfaces/Subscriber'

export class EmailSubscriber implements Subscriber {
    update(data: string): void {
        console.log(`\nWe are notifying via email: ${data}`)
    }
}
