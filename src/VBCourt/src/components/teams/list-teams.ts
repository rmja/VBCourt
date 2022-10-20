import { inject } from "aurelia";

import { IApiClient } from "../../api/client";
import { IState } from "../../state";
import { IStore } from "@aurelia/state";
import { IRouteableComponent, Parameters } from "@aurelia/router";

@inject()
export class ListTeams implements IRouteableComponent {
  teams: TeamViewModel[] = [];

  constructor(
    @IApiClient private api: IApiClient,
    @IStore private store: IStore<IState>
  ) {}

  public async loading(params: Parameters) {
    const state = this.store.getState();
    const playerId = state.playerId!;
    const teams = await this.api.teams.getAllByPlayer(playerId).transfer();
    this.teams = teams;
  }
}

interface TeamViewModel {
  id: number;
  name: string;
  number: number;
}
