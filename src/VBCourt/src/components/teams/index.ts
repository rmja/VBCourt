import { IRoute, IRouteableComponent } from "@aurelia/router";

import { CreateTeam } from "./create-team";
import { JoinTeam } from "./join-team";
import { ListTeams } from "./list-teams";
import { customElement } from "aurelia";

@customElement({
  name: "teams-index",
  template: "<au-viewport></au-viewport>"
})
export class TeamsIndex implements IRouteableComponent {
  static routes: IRoute[] = [
    {
      id: "list",
      path: "",
      component: ListTeams,
    },
    {
      path: "create",
      component: CreateTeam,
    },
    {
      path: "join",
      component: JoinTeam,
    },
    {
      id: "games",
      path: ":teamId/games",
      component: () => import("../games"),
    },
  ];
}
