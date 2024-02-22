// Concrete Mediator

import { IMediator } from '../interfaces/Mediator'
import { ButtonComponent } from './ButtonComponent'
import { Component } from './Component'
import { TextFieldComponent } from './TextFieldComponent'

export class AuthDialogMediator implements IMediator {
    // Gestionamos el ciclo de vida de todos los componentes
    // Como una Facade

    private _buttonComponent: ButtonComponent
    private _textFieldComponent: TextFieldComponent

    constructor(button: Component, textField: Component) {
        this._buttonComponent = button
        this._textFieldComponent = textField
    }

    notify(sender: Component, event: string): void {
        console.log('Notify', event)

        if (sender === this._buttonComponent && event === 'click') {
            this._textFieldComponent.write()
        }

        if (sender === this._textFieldComponent && event === 'write') {
            // Do not call button.click to avoid loop due to circular dependency
            console.log('Write mediator')
        }
    }
}
