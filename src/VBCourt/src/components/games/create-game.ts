import { IRouter, Parameters } from "@aurelia/router";
import { observable } from "aurelia";
import { DateTime } from "luxon";
import { IApiClient } from "../../api/client";

export class CreateGame {
  private teamId!: number;
  public minParticipants = 0;
  public maxParticipants = 0;
  @observable
  public starts = DateTime.local().startOf("hour").plus({ hour: 1 });
  public ends = DateTime.local().startOf("hour").plus({ hour: 2 });

  constructor(
    @IApiClient private api: IApiClient,
    @IRouter private router: IRouter
  ) {}

  public load(params: Parameters) {
    // FIXME: Why is params.teamId not defined here when we refresh this page?
    // i.e. not read from the url. It is only defined if we navigate to here from "list-games"
    this.teamId = Number(params.teamId);
  }

  public startsChanged() {
    this.ends = this.starts.plus({ hour: 1 });
  }

  public async create() {
    const game = await this.api.games
      .create(this.teamId, {
        starts: this.starts,
        ends: this.ends,
        minParticipants: this.minParticipants,
        maxParticipants: this.maxParticipants || undefined,
      })
      .transfer();

    await this.router.load("../list", { context: this });
  }
}

export class DatetimeLocalValueConverter {
  toView(value?: DateTime) {
    if (!value || !value.isValid) {
      return;
    }

    return value.toISO().substring(0, "YYYY-MM-DDTHH:mm".length);
  }

  fromView(value: string) {
    return DateTime.fromISO(value).startOf("hour");
  }
}
