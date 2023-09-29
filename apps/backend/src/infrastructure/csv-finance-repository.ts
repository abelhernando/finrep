import { FinanceRepository } from "../domain/interfaces/finance-repository";
import { Investment } from "../domain/interfaces/investment";
import * as path from "path";

const fs = require("fs");
const csv = require("csv-parser");

export class CsvFinanceRepository implements FinanceRepository {
    private static instance: CsvFinanceRepository;

    private _data: Investment[];

    private constructor() {
        this.initialize();
    }

    public static getInstance() {
        if (!CsvFinanceRepository.instance) {
            CsvFinanceRepository.instance = new CsvFinanceRepository();
        }
        return CsvFinanceRepository.instance;
    }

    public get(): Investment[] {
        return this._data;
    }

    private async initialize() {
        const results: Investment[] = [];
        const csvFilePath = path.join(
            __dirname,
            "data-source/positionDataset.csv",
        );

        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on("data", (data) => {
                results.push(data);
            })
            .on("end", () => {
                this._data = results;
            });
    }
}
