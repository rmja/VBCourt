import { IRouter } from "@aurelia/router";
import { IApiClient } from "../../api/client";
import { Team } from "../../api/teams";
import { IAuthService } from "../../services/auth-service";

export class JoinTeam {
  public number = "";
  public passwordRequired = false;
  public password = "";
  public error?: "not-found" | "wrong-password";

  constructor(
    @IApiClient private api: IApiClient,
    @IAuthService private auth: IAuthService,
    @IRouter private router: IRouter
  ) {}

  public async submit() {
    this.error = undefined;
    const teamNumber = Number(this.number);
    let team: Team;
    try {
      team = await this.api.teams.getByNumber(teamNumber).transfer();
    } catch {
      this.error = "not-found";
      return;
    }

    this.passwordRequired = team.hasPassword;
    if (this.passwordRequired && !this.password) {
      return;
    }

    const user = await this.auth.getUser();
    try {
      await this.api.memberships
        .join(user.athleteId, team.id, {
          password: this.password || "",
        })
        .send();
    } catch {
      this.error = "wrong-password";
      return;
    }

    await this.router.load("../games", { context: this });
  }
}
