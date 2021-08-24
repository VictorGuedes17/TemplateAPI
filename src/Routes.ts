import HealthRoutes from "./routes/health";


export class Routes {

    public healthRoutes: HealthRoutes = new HealthRoutes();


    constructor(app: any) {
        this.routerSetup(app);
    }

    public routerSetup(app: any): void {
        this.healthRoutes.routes(app);
    }

}