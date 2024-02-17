// Context

import { Strategy } from '../interfaces/Strategy'

export class OperationContext {
    private strategy: Strategy

    setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b)
    }
}
