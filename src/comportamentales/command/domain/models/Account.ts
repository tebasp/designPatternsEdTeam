// Receiver
// The receiver has the Business logic

export class Account {
    private _id: number
    private _total: number

    constructor(id: number, total: number) {
        this._id = id
        this._total = total
    }

    public deposit(amount: number): boolean {
        console.log('🚀 ~ Account ~ deposit:', amount)
        this._total += amount
        return true
    }

    public retirement(amount: number): boolean {
        console.log('🚀 ~ Account ~ retiro:', amount)
        this._total -= amount
        return true
    }

    public getTotal(): number {
        return this._total
    }
}
