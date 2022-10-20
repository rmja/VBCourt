import { IRouteViewModel, Params } from "aurelia";

import { IApiClient } from "../../api/client";
import { DateTime } from "luxon";

export class ListGames implements IRouteViewModel {
  public games!: GameViewModel[];

  constructor(@IApiClient private api: IApiClient) {}

  public async loading(params: Params) {
    const teamId = Number(params.teamId);
    // const games = await this.api.games.getAll(teamId).transfer();
    this.games = [
      {
        time: DateTime.local(),
        players: 123,
        minPlayers: 3,
      },
    ]; // games.map((x) => ({ ...x, players: x.players.length }));
  }
}

interface GameViewModel {
  time: DateTime;
  players: number;
  minPlayers: number;
  maxPlayers?: number;
}
