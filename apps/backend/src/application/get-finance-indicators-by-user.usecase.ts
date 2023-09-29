import { Indicator } from "../domain/indicator";
import { FinanceRepository } from "../domain/interfaces/finance-repository";
import { UseCase } from "../domain/interfaces/use-case";
import { Quantity } from "../domain/vo/quantity";

export class GetFinanceIndicatorsByUser implements UseCase {
    private readonly repository: FinanceRepository;

    constructor(financeRespository: FinanceRepository) {
        this.repository = financeRespository;
    }

    public async execute(): Promise<any> {
        const data = this.repository.get();

        const distributionByCurrency = new Indicator();
        const distributionByType = new Indicator();
        const distributionByEntity = new Indicator();

        let totalCosts = 0;
        let totalGains = 0;

        data.forEach((investment) => {
            const currency = investment.currency;
            const type = investment.type;
            const entity = investment.entity;
            const balance = new Quantity(investment.balance).value;

            distributionByCurrency.setValue(currency, balance);
            distributionByType.setValue(type, balance);
            distributionByEntity.setValue(entity, balance);

            const gain = parseFloat(investment.capital_gain);

            if (!isNaN(gain)) {
                totalGains = totalGains + gain;
            }

            const cost = parseFloat(investment.cost);

            if (!isNaN(cost)) {
                totalCosts = totalCosts + cost;
            }
        });

        const mediaGanancia = totalGains / data.length;
        const mediaRiesgo = totalCosts / data.length;

        return {
            distributionByCurrency: Object.fromEntries(
                distributionByCurrency.getValues(),
            ),
            distributionByType: Object.fromEntries(
                distributionByType.getValues(),
            ),
            distributionByEntity: Object.fromEntries(
                distributionByEntity.getValues(),
            ),
            mediaGanancia,
            mediaRiesgo,
            data,
        };
    }
}
