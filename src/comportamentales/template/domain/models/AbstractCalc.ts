// Abstract Template

export abstract class AbstractCalc {
    // This is the alogoritm, this one do not change
    public calculate(value: number) {
        let num = this.add(value)
        num = this.substract(num)
        return num
    }

    // This methods will be extended in concrete templates
    // This methods serves to the main algorithm
    abstract add(num: number): number
    abstract substract(num: number): number
}
