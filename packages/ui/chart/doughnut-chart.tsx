import React = require("react");
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./charts.module.scss";
import { Translations } from "../table";

type DoughnutChartProps = {
    data: { [key: string]: number };
};

export function DoughnutChart({ data }: DoughnutChartProps): JSX.Element {
    const total = Object.values(data).reduce((acc, curr) => acc + curr, 0);
    ChartJS.register(ArcElement, Tooltip, Legend);

    const _data = {
        labels: Object.keys(data).map((key) => Translations[key]),
        datasets: [
            {
                label: "% of Inversions by type",
                data: Object.values(data).map((val) =>
                    ((val / total) * 100).toFixed(2),
                ),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                labels: {
                    color: "white",
                },
            },
        },
    };

    return (
        <div className={styles.doughnutChartContainer}>
            <h2 className="text-center">% of Inversion by Type</h2>
            <Doughnut data={_data} options={options} />
        </div>
    );
}
