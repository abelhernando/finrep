import { Router } from "express";
import { FinanceController } from "../controllers/finance-controller";
import { GetFinanceIndicatorsByUser } from "../../../application/get-finance-indicators-by-user.usecase";
import { CsvFinanceRepository } from "../../csv-finance-repository";

const router = Router();

const financeController = FinanceController.getInstance(
    new GetFinanceIndicatorsByUser(CsvFinanceRepository.getInstance()),
);

router.get("/", financeController.get.bind(financeController));

export default router;
