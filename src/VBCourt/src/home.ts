import { IRouteViewModel } from "aurelia";
import { IState } from "./state";
import { Parameters } from "@aurelia/router";
import { fromState } from "@aurelia/state";

export class Home implements IRouteViewModel {
  @fromState<IState>((state) => state)
  state!: IState;

  public canLoad(params: Parameters) {
    debugger;
    if (this.state?.playerId) {
      return true;
    }

    // FIXME: This does not work - apparently we cannot redirect into a sub-route
    // It only redirects to /athletes and not to its lookup sub route
    return "/athletes/lookup";
  }

  public loading() {}
}
