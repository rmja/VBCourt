import { IState, StateAction } from "../../state";
import { IStore } from "@aurelia/state";

import { IApiClient } from "../../api/client";
import { IRouteableComponent, Parameters } from "@aurelia/router";

export class CreateAthlete implements IRouteableComponent {
  public name = "";
  public email = "";
  public phone = "";

  constructor(
    @IApiClient private api: IApiClient,
    @IStore private store: IStore<IState>
  ) {}

  public canLoad() {
    debugger;
    return true;
  }

  public loading(params: Parameters) {
    debugger;
    this.email;
  }

  public async submit() {
    const player = await this.api.athletes
      .create({
        name: this.name,
        email: this.email,
        phone: this.name,
      })
      .transfer();

    await this.store.dispatch(StateAction.setPlayer, player.id);
  }
}
