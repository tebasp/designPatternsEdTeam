import { AuthDialogMediator } from '../domain/models/AuthDialogMediator'
import { ButtonComponent } from '../domain/models/ButtonComponent'
import { TextFieldComponent } from '../domain/models/TextFieldComponent'

export function handler() {
    const button = new ButtonComponent()
    const text = new TextFieldComponent()

    const mediator = new AuthDialogMediator(button, text)

    text.setMediator(mediator)
    button.setMediator(mediator)

    // text.write()
    button.click()
}

handler()
