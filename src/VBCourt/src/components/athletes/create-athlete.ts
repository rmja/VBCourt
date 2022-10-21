import { IApiClient } from "../../api/client";
import {
  IRouteableComponent,
  IRouter,
  Navigation,
  Parameters,
  RoutingInstruction,
} from "@aurelia/router";
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

  public loading(
    params: Parameters,
    instruction: RoutingInstruction,
    navigation: Navigation
  ) {
    // FIXME: This looks weird
    if (navigation.data) {
      const { email, phone } = navigation.data;
      this.email = email as string;
      this.phone = phone as string;
    }
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
