import { IRouteViewModel, Params } from "aurelia";

import { IApiClient } from "../../api/client";
import { DateTime } from "luxon";

export class ListGames implements IRouteViewModel {
  public games!: GameViewModel[];

  constructor(@IApiClient private api: IApiClient) {}

  public async loading(params: Params) {
    const teamId = Number(params.teamId);
    const games = await this.api.games.getAll(teamId).transfer();
    this.games = games.map((game) => ({
      ...game,
      participants: game.participants.length,
    }));
  }
}

interface GameViewModel {
  starts: DateTime;
  ends: DateTime;
  minParticipants: number;
  maxParticipants?: number;
  participants: number;
}
