import * as athletes from "./athletes";
import * as courts from "./courts";
import * as games from "./games";
import * as teams from "./teams";

export class ApiClient {
  athletes = athletes;
  courts = courts;
  games = games;
  teams = teams;
}
