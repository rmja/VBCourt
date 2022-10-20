import { IApiClient } from "../../api/client";
import { Athlete } from "../../api/athletes";
import { Patch } from "@utiliread/jsonpatch";
import { IRouter } from "@aurelia/router";
import { IAuthService } from "../../services/auth-service";

export class CreateTeam {
  public name = "";

  constructor(
    @IApiClient private api: IApiClient,
    @IRouter private router: IRouter,
    @IAuthService private auth: IAuthService
  ) {}

  public async submit() {
    debugger;
    const user = await this.auth.getUser();
    const team = await this.api.teams.create({ name: this.name }).transfer();
    const patch = new Patch<Athlete>().addEnd((x) => x.teams, team.id);
    // await this.api.athletes.update(user.athleteId, patch.operations).send();
    this.router.load("../");
  }
}
