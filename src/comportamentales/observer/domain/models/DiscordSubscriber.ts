// Concrete Subscriber

import { Subscriber } from '../interfaces/Subscriber'

export class DiscordSubscriber implements Subscriber {
    update(data: string): void {
        console.log(`\nWe are notifying via Discord: ${data}`)
    }
}
