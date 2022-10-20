import { IRouteableComponent, IRouter } from "@aurelia/router";
import { IAuthService } from "../../services/auth-service";

export class LookupAthlete implements IRouteableComponent {
  public phone = "123456";
  public email = "rmja@test.dk";
  constructor(
    @IAuthService private auth: IAuthService,
    @IRouter private router: IRouter
  ) {}

  public async lookup() {
    const success = await this.auth.login(this.email, this.phone);
    if (!success) {
      debugger;
      // FIXME: This does not navigate to the "create" route,
      // even though the same "../create" is specified in the view model
      // where it actually works.
      await this.router.load("../create", {
        parameters: {
          phone: this.phone,
          email: this.email,
        },
      });
      return;
    }

    this.router.load("../teams");
  }
}
