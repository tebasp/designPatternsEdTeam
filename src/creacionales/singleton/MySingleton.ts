export class MySingleton {
    static _instance: MySingleton
    private _name: string

    private constructor(name: string) {
        this._name = name
    }

    // Static method, access to Static properties
    static getInstance(name: string): MySingleton {
        if (!this._instance) {
            this._instance = new MySingleton(name)
        }

        return this._instance
    }

    get name(): string {
        return this._name
    }
}
