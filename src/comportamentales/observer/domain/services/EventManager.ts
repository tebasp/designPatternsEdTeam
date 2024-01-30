import { Subscriber } from '../interfaces/Subscriber'

export class EventManager {
    private _subscribers: Subscriber[]

    constructor() {
        this._subscribers = []
    }

    subscribe(subscriber: Subscriber) {
        this._subscribers.push(subscriber)
    }

    // Implements Remove

    notify(data: string) {
        this._subscribers.forEach((item) => item.update(data))
    }
}
