import * as athletes from "./athletes";
import * as games from "./games";
import * as memberships from "./memberships";
import * as teams from "./teams";

import { DI } from "aurelia";

export const IApiClient = DI.createInterface<IApiClient>(
  "IApiClient",
  (x) => x.singleton(ApiClient)
);
export type IApiClient = Readonly<ApiClient>;

export class ApiClient {
  athletes = athletes;
  games = games;
  memberships = memberships;
  teams = teams;
}
