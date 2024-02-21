// Concrete Command

import { Command } from '../interfaces/Command'
import { Account } from './Account'

export class Deposit implements Command {
    private _account: Account
    private _amount: number

    constructor(account: Account, amount: number) {
        this._account = account
        this._amount = amount
    }

    execute(): void {
        this._account.deposit(this._amount)
    }
}
