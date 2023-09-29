import { FinanceIndicator } from "./interfaces/indicator";

export class Indicator implements FinanceIndicator {
    private values: Map<string, number> = new Map();

    public setValue(key: string, quantity: number) {
        if (!isNaN(quantity)) {
            if (this.values.has(key)) {
                this.values.set(key, this.values.get(key) + quantity);
            } else {
                this.values.set(key, quantity);
            }
        }
    }

    public getValues(): Map<string, number> {
        return this.values;
    }
}
