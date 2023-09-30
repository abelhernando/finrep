import React = require("react");

export enum Translations {
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
    costs = "Total Costs",
    gains = "Total Gains",
    shares = "# of Shares",
}

type TableProps = {
    data: { [key: string]: number };
};

export function Table({ data }: TableProps): JSX.Element {
    console.log("data:", data);
    return (
        <div className="mt-4 -mb-3">
            <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
                <div
                    className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
                    style={{ backgroundPosition: "10px 10px" }}
                ></div>
                <div className="relative rounded-xl overflow-auto">
                    <div className="px-4 py-8 sm:px-8">
                        <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
                            <thead className="bg-slate-50 dark:bg-slate-700">
                                <tr>
                                    <th className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                                        Key
                                    </th>
                                    <th className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                                        Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(data).map((key) => (
                                    <tr key={key}>
                                        <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                            {Translations[key]}
                                        </td>
                                        <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                            {data[key].toLocaleString(
                                                undefined,
                                                {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                },
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
            </div>
        </div>
    );
}
