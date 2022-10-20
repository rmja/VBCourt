import * as athletes from "./athletes";
import * as courts from "./courts";
import * as games from "./games";
import * as teams from "./teams";

import { DI } from "aurelia";

export const IApiClient = DI.createInterface<IApiClient>(
  "IApiClient",
  (x) => x.singleton(ApiClient)
);
export type IApiClient = Readonly<ApiClient>;

export class ApiClient {
  athletes = athletes;
  courts = courts;
  games = games;
  teams = teams;
}
