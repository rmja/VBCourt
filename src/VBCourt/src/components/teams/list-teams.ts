import { IApiClient } from "../../api/client";
import { IRouteableComponent, Parameters } from "@aurelia/router";
import { IAuthService } from "../../services/auth-service";

export class ListTeams implements IRouteableComponent {
  teams: TeamViewModel[] = [];

  constructor(
    @IApiClient private api: IApiClient,
    @IAuthService private auth: IAuthService
  ) {}

  public async loading(params: Parameters) {
    debugger;
    const user = await this.auth.getUser();
    const teams = await this.api.teams.getAllByAthlete(user.athleteId).transfer();
    this.teams = teams;
  }
}

interface TeamViewModel {
  id: number;
  name: string;
  number: number;
}
