import { IRoute, IRouteableComponent } from "@aurelia/router";

import { CreateTeam } from "./create-team";
import { ListTeams } from "./list-teams";
import { customElement } from "aurelia";

@customElement({
  name: "teams-index",
  template: "<au-viewport></au-viewport>"
})
export class TeamsIndex implements IRouteableComponent {
  static routes: IRoute[] = [
    {
      path: "",
      component: ListTeams,
    },
    {
      id: "hello",
      path: "create",
      component: CreateTeam,
    },
    {
      id: "games",
      path: ":teamId/games",
      component: () => import("../games"),
    },
  ];
}
