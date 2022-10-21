import { dateTimeConverter, jsonProperty } from "@utiliread/json";

import { DateTime } from "luxon";
import { http } from "./http";

export class Game {
  @jsonProperty()
  id!: number;

  @jsonProperty()
  teamId!: number;

  @jsonProperty({ converter: dateTimeConverter })
  time!: DateTime;

  @jsonProperty()
  minPlayers: number = 0;

  @jsonProperty()
  maxPlayers?: number;

  @jsonProperty()
  athletes: { athleteId: number; priority: number }[] = [];

  constructor(
    init?: Readonly<Omit<Game, "minPlayers" | "athletes">> & Partial<Game>
  ) {
    Object.assign(this, init);
  }
}

const storage = [
  new Game({ id: 1, teamId: 1, time: DateTime.local(), minPlayers: 4 }),
];

export const getAll = (teamId: number) => ({
  transfer: () => Promise.resolve(storage.filter((x) => x.teamId === teamId)),
}); // http.get(`/Teams/${teamId}/Games`).expectJsonArray(Game);
