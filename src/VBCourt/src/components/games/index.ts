import { IRoute, IRouteableComponent } from "@aurelia/router";

import { ListGames } from "./list-games";
import { customElement } from "aurelia";

@customElement({
  name: "games-index",
  template: "<au-viewport></au-viewport>",
})
export class GamesIndex implements IRouteableComponent {
  static routes: IRoute[] = [
    {
      path: "",
      component: ListGames,
    },
  ];
}
