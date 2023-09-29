import { Investment } from "./investment";

export interface FinanceRepository {
    get(): Investment[];
}
