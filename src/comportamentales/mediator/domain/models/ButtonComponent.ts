// Concrete Component

import { Component } from './Component'

export class ButtonComponent extends Component {
    click(): void {
        console.log('Click Button component')
        this._mediator.notify(this, 'click')
    }

    write(): void {
        this._mediator.notify(this, 'write')
    }
}
