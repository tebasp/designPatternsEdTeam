// Invoker

import { Command } from '../interfaces/Command'

export class Invoker {
    private _commands: Command[]

    constructor() {
        this._commands = []
    }

    public setCommand(command: Command): void {
        this._commands.push(command)
    }

    public executeCommand(): void {
        this._commands.forEach((command) => command.execute())
    }
}
