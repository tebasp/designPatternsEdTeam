// Prototype

export abstract class Prototype {
    protected x: string
    protected y: string
    protected z: string

    public abstract clone(): Prototype

    public getX(): string {
        return this.x
    }

    public setX(x: string): void {
        this.x = x
    }

    public getY(): string {
        return this.y
    }

    public setY(y: string): void {
        this.y = y
    }

    public getZ(): string {
        return this.z
    }

    public setZ(z: string): void {
        this.z = z
    }
}
