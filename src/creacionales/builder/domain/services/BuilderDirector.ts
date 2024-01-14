// Director

import { Action, Builder } from '../interfaces/builder'

export class BuilderDirector {
    private builder: Builder
    private actions: Action[]

    constructor() {
        this.actions = []
    }

    // All of this can be performed directly in the Concrete Builder
    setBuilder(builder: Builder): void {
        this.builder = builder
    }

    loadAction(action: Action) {
        this.actions.push(action)
    }

    setActions(): void {
        this.builder.loadActions(this.actions)
    }

    build(): void {
        this.builder.build()
    }

    // Now the builder is util
    buildSportCar() {
        this.actions = []

        this.loadAction({ action: 1, value: 'Sport' })
        this.loadAction({ action: 2, value: 4 })
        this.loadAction({ action: 3, value: 'Blue' })
        this.loadAction({ action: 4, value: 2 })
        this.loadAction({ action: 5, value: 'V8' })

        this.setActions()
        this.build()
    }
}
