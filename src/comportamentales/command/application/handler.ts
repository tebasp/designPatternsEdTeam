import { Account } from '../domain/models/Account'
import { Deposit } from '../domain/models/Deposit'
import { Retirement } from '../domain/models/Retirement'
import { Invoker } from '../domain/services/Invoker'

export function handler() {
    const invoker = new Invoker()
    const account = new Account(1, 200) // Receiver

    // Commands
    const depositCommand = new Deposit(account, 100)
    const retirementCommand = new Retirement(account, 50)

    invoker.setCommand(depositCommand)
    invoker.setCommand(retirementCommand)

    invoker.executeCommand()

    // Print total to check transactions
    const total = account.getTotal()
    console.log('\n🚀 ~ handler ~ total:', total)
}

handler()
