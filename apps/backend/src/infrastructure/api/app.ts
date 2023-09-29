import { Application } from "express";
import express = require("express");
import cors = require("cors");

import financeRoutes from "./routes/finance.route";

class App {
    private static instance: App;

    public app: Application;

    private constructor() {
        this.app = express();
        this.configure();
        this.setupRoutes();
    }

    public static getInstance(): App {
        if (!App.instance) {
            App.instance = new App();
        }
        return App.instance;
    }

    private configure(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    private setupRoutes(): void {
        this.app.use("/finance", financeRoutes);
    }
}

export default App.getInstance().app;
