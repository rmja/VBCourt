import { IRoute, IRouteableComponent } from "@aurelia/router";

import { CreateAthlete } from "./create-athlete";
import { LookupAthlete } from "./lookup-athlete";
import { customElement } from "aurelia";

@customElement({
  name: "athletes-index",
  template: "<au-viewport></au-viewport>"
})
export class AthletesIndex implements IRouteableComponent {
  static routes: IRoute[] = [
    {
      path: "create",
      component: CreateAthlete,
    },
    {
      path: "lookup",
      component: LookupAthlete,
    },
  ];
}
