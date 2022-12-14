import { IAuthService } from "../services/auth-service";
import { IRouteableComponent, Parameters } from "@aurelia/router";

export class Home implements IRouteableComponent {
  constructor(@IAuthService private auth: IAuthService) {
  }

  public canLoad(params: Parameters) {
    if (!this.auth.isLoggedIn) {
      // FIXME: This does not work - apparently we cannot redirect into a sub-route
      // It only redirects to /athletes and not to its lookup sub route
      // return "/athletes/lookup";
    }

    return true;    
  }

  public loading() {}
}
