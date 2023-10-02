import axios from "axios";

export type FinanceResponse = {
    distributionByCurrency: {
        [key: string]: number;
    };
    distributionByType: {
        [key: string]: number;
    };
    distributionByEntity: {
        [key: string]: number;
    };
    summary: {
        [key: string]: number;
    };
};

export async function getFinance(): Promise<FinanceResponse> {
    const API_URL = process.env.NEXT_PUBLIC_API_KEY ?? "http://localhost:3001";

    return axios
        .get<any[]>(`${API_URL}/finance`)
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            return null;
        });
}
