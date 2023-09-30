import React = require("react");
import { AreaChart } from "../chart/area-chart";
import styles from "./index.module.scss";

interface InvestmentItemProps {
    name: string;
    balance: number;
    percentageChange: number;
}

const InvestmentItem: React.FC<InvestmentItemProps> = ({
    name,
    balance,
    percentageChange,
}) => {
    const isPositive = percentageChange >= 0;
    const color = isPositive ? "green" : "red";

    return (
        <div
            className={`${styles.container} mt-5 flex gap-12 investment-item justify-center items-center`}
        >
            <h3 className="investment-name">{name}</h3>
            <div className={`${styles.chartContainer} text-center`}>
                <AreaChart color={color} />
            </div>
            <div className={`${styles.values} ${styles[color]}`}>
                <div className={`${styles.balance} balanceTag`}>
                    {isPositive ? "+" : ""}
                    {percentageChange.toFixed(2)}%
                </div>
                {balance}
            </div>
        </div>
    );
};

export default InvestmentItem;
