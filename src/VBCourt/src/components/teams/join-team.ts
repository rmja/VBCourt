import { IApiClient } from "../../api/client";
import { Team } from "../../api/teams";
import { IAuthService } from "../../services/auth-service";

export class JoinTeam {
  number = "";
  passwordRequired = false;
  password = "";
  error?: "not-found" | "wrong-password";

  constructor(
    @IApiClient private api: IApiClient,
    @IAuthService private auth: IAuthService
  ) {}

  public async join() {
    this.error = undefined;
    const teamNumber = Number(this.number);
    let team: Team;
    try {
      team = await this.api.teams.getByNumber(teamNumber).transfer();
    } catch {
      this.error = "not-found";
      return;
    }

    this.passwordRequired = team.passwordRequired;
    if (this.passwordRequired && !this.password) {
      return;
    }

    const user = await this.auth.getUser();
    try {
    // await this.api.teams
    //   .join(team.id, {
    //     athleteId: user.athleteId,
    //     password: this.password || undefined,
    //   })
    //   .send();
    }
    catch {
      this.error = "wrong-password";
    }
  }
}
