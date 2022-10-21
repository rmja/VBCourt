import { IApiClient } from "../../api/client";
import { IRouter } from "@aurelia/router";
import { IAuthService } from "../../services/auth-service";
import { Membership } from "../../api/memberships";

export class CreateTeam {
  public name = "";

  constructor(
    @IApiClient private api: IApiClient,
    @IRouter private router: IRouter,
    @IAuthService private auth: IAuthService
  ) {}

  public async submit() {
    const user = await this.auth.getUser();
    const team = await this.api.teams
      .create({
        administratorAthleteId: user.athleteId,
        name: this.name,
        members: [
          new Membership({
            athleteId: user.athleteId,
            teamId: 0,
          }),
        ],
      })
      .transfer();
    await this.router.load(`../${team.id}/games`, {
      context: this,
    });
  }
}
