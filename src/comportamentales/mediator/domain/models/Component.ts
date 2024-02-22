// Component

import { IMediator } from '../interfaces/Mediator'

export abstract class Component {
    protected _mediator: IMediator

    setMediator(mediator: IMediator) {
        this._mediator = mediator
    }

    abstract click(): void

    abstract write(): void
}
