import { http } from "./http";
import { jsonProperty } from "@utiliread/json";

export class Team {
  @jsonProperty()
  id!: number;

  @jsonProperty()
  name!: string;

  @jsonProperty()
  number!: number;

  @jsonProperty()
  passwordRequired!: boolean;

  constructor(init?: Readonly<Team>) {
    Object.assign(this, init);
  }
}

const storage = [
  new Team({
    id: 1,
    name: "Herrepadle",
    number: 12345,
    passwordRequired: true,
  }),
];

export const create = (team: { name: string; password?: string }) => ({
  transfer: () => {
    const item = new Team({
      id: storage.length + 1,
      number: 10_000 + Math.round(Math.random() * 90_000),
      ...team,
      passwordRequired: !!team.password,
    });
    storage.push(item);
    return Promise.resolve(item);
  },
}); // http.post("/Teams").withJson(team).expectJson(Team)

export const getByNumber = (teamNumber: number) => ({
  transfer: () => {
    const team = storage.find((x) => x.number === teamNumber);
    return team ? Promise.resolve(team) : Promise.reject();
}});

export const getAllByAthlete = (athleteId: number) => ({
  transfer: () => Promise.resolve(storage),
});

export const join = (
  teamId: number,
  command: { athleteId: number; password?: string }
) => http.post(`/Teams/${teamId}/Join`).withJson(command);
