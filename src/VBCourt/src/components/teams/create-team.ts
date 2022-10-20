import { inject } from "aurelia";

import { ApiClient } from "../../api/client";
import { Athlete } from "../../api/athletes";
import { IState } from "../../state";
import { Patch } from "@utiliread/jsonpatch";
import { fromState } from "@aurelia/state";
import { IRouter } from "@aurelia/router";

@inject()
export class CreateTeam {
  @fromState<IState>((state) => state.playerId)
  private playerId!: number;
  public name = "";

  constructor(
    private api: ApiClient,
    @IRouter private router: IRouter
  ) {}

  public async create() {
    debugger;
    const team = await this.api.teams.create({ name: this.name }).transfer();
    const patch = new Patch<Athlete>().addEnd((x) => x.teams, team.id);
    await this.api.athletes
      .update(this.playerId!, patch.operations)
      .send();
    this.router.load("/teams");
  }
}
