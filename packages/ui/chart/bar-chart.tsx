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
            // label: data.name,
            label: Object.keys(data),
            data: Object.values(data),
            // data: data.competences.map((c) => LevelValues[c.level]),
            backgroundColor: "rgb(42, 76, 170, 0.2)",
            borderColor: "#2a4caa",
            pointBackgroundColor: "#2a4caa",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#2a4caa",
        },
    ];

    const _data = {
        labels: Object.keys(data),
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
                        // const level = Object.keys(Translations).find((key) => {
                        //     console.log("key:", key, tooltipItem.label);
                        //     return Translations[key] === tooltipItem.label;
                        // });
                        // console.log("level:", level);
                        return `${
                            Translations[tooltipItem.label]
                        }: ${parseFloat(tooltipItem.raw)}`;
                    },
                },
            },
        },
    };

    return (
        <div>
            <Bar data={_data as any} options={options} />
        </div>
    );
}
