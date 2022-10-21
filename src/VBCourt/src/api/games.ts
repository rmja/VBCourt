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
  minParticipants: number = 0;

  @jsonProperty()
  maxParticipants?: number;

  @jsonProperty()
  participants: { athleteId: number; priority: number }[] = [];

  constructor(init?: GameInit) {
    Object.assign(this, init);
  }
}

export type GameInit = Omit<Game, "id" | "minPlayers" | "participants"> &
  Partial<Game>;

const storage = [
  new Game({ id: 1, teamId: 1, time: DateTime.local(), minParticipants: 4 }),
];

export const create = (teamId: number, init: Omit<GameInit, "teamId">) =>
  http.post(`/Teams/${teamId}/Games`).withJson(init).expectJson(Game);

export const getAll = (teamId: number) => ({
  transfer: () => Promise.resolve(storage.filter((x) => x.teamId === teamId)),
}); // http.get(`/Teams/${teamId}/Games`).expectJsonArray(Game);
