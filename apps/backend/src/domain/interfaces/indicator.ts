export interface FinanceIndicator {
    getValues(): Map<string, number>;
    setValue(key: string, value: number): void;
}
