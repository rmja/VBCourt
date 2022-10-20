import { IApiClient } from "../../api/client";
import { IStore } from "@aurelia/state";
import { IState, StateAction } from "../../state";
import { IRouteableComponent, IRouter } from "@aurelia/router";

export class LookupAthlete implements IRouteableComponent {
  public phone = "123456";
  public email = "rmja@test.dk";
  constructor(
    @IApiClient private api: IApiClient,
    @IStore private store: IStore<IState>,
    @IRouter private router: IRouter
  ) {}

  public async lookup() {
    const athlete = await this.api.athletes
      .lookup({ phone: this.phone, email: this.email })
      .transfer();
    if (!athlete) {
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

    await this.store.dispatch(StateAction.setPlayer, athlete.id);
    this.router.load("/teams");
  }
}
