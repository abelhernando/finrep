export class Quantity {
    private _value: number;

    constructor(value: string | number) {
        this.validate(value);
    }

    public get value(): number {
        return this._value;
    }

    private validate(value: string | number) {
        const numberValue =
            typeof value === "string" ? parseFloat(value) : value;

        if (isNaN(numberValue)) {
            throw new Error("Not a number");
        }

        this._value = numberValue;
    }
}
