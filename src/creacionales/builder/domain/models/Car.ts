// Product

export class Car {
    private chassis: string
    private wheels: number
    private color: string
    private doors: number
    private engine: string

    public setChassis(chassis: string): void {
        this.chassis = chassis
    }

    public setWheels(wheels: number): void {
        this.wheels = wheels
    }

    public setColor(color: string): void {
        this.color = color
    }

    public setDoors(doors: number): void {
        this.doors = doors
    }

    public setEngine(engine: string): void {
        this.engine = engine
    }
}
