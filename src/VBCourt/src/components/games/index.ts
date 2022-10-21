import { IRoute, IRouteableComponent } from "@aurelia/router";

import { CreateGame } from "./create-game";
import { ListGames } from "./list-games";
import { customElement } from "aurelia";

@customElement({
  name: "games-index",
  template: "<au-viewport></au-viewport>",
})
export class GamesIndex implements IRouteableComponent {
  static routes: IRoute[] = [
    {
      id: "list",
      path: "",
      component: ListGames,
    },
    {
      path: "create",
      component: CreateGame,
    }
  ];
}
