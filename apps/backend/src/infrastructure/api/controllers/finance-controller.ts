import { Request, Response } from "express";
import { UseCase } from "../../../domain/interfaces/use-case";
import { Investment } from "../../../domain/interfaces/investment";

export class FinanceController {
    private static instance: FinanceController;

    private useCase: UseCase;

    private constructor(useCase: UseCase) {
        this.useCase = useCase;
    }

    public static getInstance(useCase: UseCase) {
        if (!FinanceController.instance) {
            FinanceController.instance = new FinanceController(useCase);
        }
        return FinanceController.instance;
    }

    public async get(_request: Request, response: Response) {
        try {
            const summary = (await this.useCase.execute()) as Investment[];
            response.json(summary);
        } catch (error) {
            response.status(500).json({
                error: "SOMETHING WENT WRONG",
            });
        }
    }
}
