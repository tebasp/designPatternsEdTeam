import { Component } from './Component'

export class TextFieldComponent extends Component {
    click(): void {
        throw new Error('Not implemented')
    }

    write(): void {
        console.log('Write TextFieldComponent')
        this._mediator.notify(this, 'write')
    }
}
