import { IRouteableComponent, IRouter } from "@aurelia/router";
import { IAuthService } from "../../services/auth-service";

export class LookupAthlete implements IRouteableComponent {
  public email = "rmja@test.dk";
  public phone = "12345678";
  constructor(
    @IAuthService private auth: IAuthService,
    @IRouter private router: IRouter
  ) {}

  public async lookup() {
    const email = this.email;
    const phone = this.phone;
    const success = await this.auth.login(email, phone);
    if (!success) {
      await this.router.load("../create", {
        data: {
          email,
          phone,
        },
        context: this,
      });
      return;
    }

    // FIXME: This only works if the component in app.ts is specified as
    // { path: "teams", component: import("./components/teams"), }
    // This does not work
    // { path: "teams", component: () => import("./components/teams"), }
    await this.router.load("/teams");
  }
}
