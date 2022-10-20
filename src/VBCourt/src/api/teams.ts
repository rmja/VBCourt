import { http } from "./http";
import { jsonProperty } from "@utiliread/json";

export class Team {
  @jsonProperty()
  id!: number;

  @jsonProperty()
  name!: string;

  @jsonProperty()
  number!: number;

  constructor(init?: Readonly<Team>) {
    Object.assign(this, init);
  }
}

const storage = [new Team({ id: 1, name: "Herrepadle", number: 123456 })];

export const create = (team: { name: string }) => ({
  transfer: () => {
    const item = new Team({id: storage.length + 1, number: Math.round(Math.random() * 10000), ...team});
    storage.push(item);
    return item;
  },
}); // http.post("/Teams").withJson(team).expectJson(Team)

export const getAllByPlayer = (playerId: number) => ({
  transfer: () =>
    Promise.resolve([{ id: 1, name: "Herrepadle", number: 123456 }]),
});
