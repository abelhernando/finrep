import { Request, Response } from "express";
import { UseCase } from "../../../domain/interfaces/use-case";
import { Investment } from "../../../domain/interfaces/investment";

/*
1. use DDD - Finance
    - domain
    - application
    - infrastructure
2.  do object composition
    - logic should be independent
    - so as the route
    - the endpoint should just retrieve the data.
    - Injecting the required dependencies when instantiating
3. check app.ts, should be a class? how would it be if there were 15 endpoints routes?
4. start working in the web
    - create a nice webpage
    - create components in the UI package
        - Button
        - Charts
        - Table
    - create a layout in the page
*/

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
            console.log("error:", error);
            response.status(500).json({
                error: "SOMETHING WENT WRONG",
            });
        }
    }
}
