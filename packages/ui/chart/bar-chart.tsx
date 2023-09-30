import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    RadialLinearScale,
    LineElement,
    ArcElement,
    Legend,
    Filler,
    RadarController,
    BarElement,
} from "chart.js";
import React = require("react");
import { Bar } from "react-chartjs-2";
import styles from "./charts.module.scss";

Chart.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    RadialLinearScale,
    RadarController,
    Filler,
    Title,
    Tooltip,
    BarElement,
    Legend,
);

enum Translations {
    EUR = "Euro",
    USD = "United States Dollars",
    HKD = "Hong Kong Dollars",
    CHF = "Swiss Francs",
    GBP = "British Pounds",
    DKK = "Danish Kroner",
    caixabank = "CaixaBank",
    rothschildmartinmaurel = "Rothschild Martin Maurel",
    "santander-e" = "Santander España",
    ETF = "Exchange Traded Funds",
    F = "Fondos",
    FI = "Fondos de Inversión",
    O = "Opciones",
    VI = "Valores Inmobiliarios",
}

type RadarAreaChartProps = {
    data: { [key: string]: number };
};

export function BarChart({ data }: RadarAreaChartProps): JSX.Element {
    const datasets = [
        {
            label: Object.keys(data).map((d) => Translations[d]),
            data: Object.values(data),
            backgroundColor: "#a853ba",
            borderColor: "#a853ba",
            pointBackgroundColor: "#a853ba",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#a853ba",
        },
    ];

    // #2a8af6 0deg,
    // #a853ba 180deg,
    // #e92a67 360deg

    const _data = {
        labels: Object.keys(data).map((d) => Translations[d]),
        datasets,
    };

    const options = {
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 6,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        console.log(
                            "options.plugins.tooltip.callbacks.tooltipItem:",
                            tooltipItem,
                        );
                        return `${tooltipItem.label}: ${parseFloat(
                            tooltipItem.raw,
                        )}`;
                    },
                },
            },
        },
    };

    return (
        <div className={styles.barChartContainer}>
            <Bar data={_data as any} options={options} />
        </div>
    );
}
