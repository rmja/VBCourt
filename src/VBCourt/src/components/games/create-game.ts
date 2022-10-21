import { IRouter, Parameters } from "@aurelia/router";
import { DateTime } from "luxon";
import { IApiClient } from "../../api/client";

export class CreateGame {
  private teamId!: number;

  constructor(
    @IApiClient private api: IApiClient,
    @IRouter private router: IRouter
  ) {}

  public load(params: Parameters) {
    this.teamId = Number(params.teamId);
  }

  public async create() {
    const game = await this.api.games
      .create(this.teamId, {
        time: DateTime.local(),
        minParticipants: 0,
        maxParticipants: 2,
      })
      .transfer();

    await this.router.load("../list", { context: this });
  }
}
