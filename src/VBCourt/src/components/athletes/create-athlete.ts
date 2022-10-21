import { IApiClient } from "../../api/client";
import { IRouteableComponent, IRouter, Parameters } from "@aurelia/router";
import { IAuthService } from "../../services/auth-service";

export class CreateAthlete implements IRouteableComponent {
  public name = "";
  public email = "";
  public phone = "";

  constructor(
    @IApiClient private api: IApiClient,
    @IRouter private router: IRouter,
    @IAuthService private auth: IAuthService
  ) {}

  public canLoad() {
    debugger;
    return true;
  }

  public loading(params: Parameters) {
    // FIXME: This looks weird
    this.email = (params.email as string) ?? "";
    this.phone = (params.phone as string) ?? "";
  }

  public async submit() {
    const athlete = await this.api.athletes
      .create({
        name: this.name,
        email: this.email,
        phone: this.name,
      })
      .transfer();

    await this.auth.login(athlete.email, athlete.phone);
    // FIXME: How to load relative to the root router in app.ts?
    // "teams" is a path there...
    await this.router.load("/teams");
  }
}
