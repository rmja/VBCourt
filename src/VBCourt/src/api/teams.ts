import { Membership } from "./memberships";
import { http } from "./http";
import { jsonProperty } from "@utiliread/json";

export class Team {
  @jsonProperty()
  id!: number;

  @jsonProperty()
  administratorAthleteId!: number;

  @jsonProperty()
  name!: string;

  @jsonProperty()
  number!: number;

  @jsonProperty()
  password?: string;

  @jsonProperty()
  hasPassword!: boolean;

  @jsonProperty({ type: Membership })
  members: Membership[] = [];

  constructor(init?: TeamInit) {
    Object.assign(this, init, { hasPassword: !!init?.password });
  }
}

export type TeamInit = Readonly<Omit<Team, "id" | "number" | "hasPassword" | "members">> &
  Partial<Team>;

const storage = [
  new Team({
    id: 1,
    administratorAthleteId: 1,
    name: "Herrepadle",
    number: 12345,
    password: "abc",
  }),
];

export const create = (init: TeamInit) => ({
  transfer: () => {
    const item = new Team({
      id: storage.length + 1,
      number: 10_000 + Math.round(Math.random() * 90_000),
      ...init,
    });
    storage.push(item);
    return Promise.resolve(item);
  },
}); // http.post("/Teams").withJson(init).expectJson(Team)

export const getByNumber = (teamNumber: number) => ({
  transfer: () => {
    const team = storage.find((x) => x.number === teamNumber);
    return team ? Promise.resolve(team) : Promise.reject();
  },
});

export const getAllByAthlete = (athleteId: number) => ({
  transfer: () => Promise.resolve(storage),
});
