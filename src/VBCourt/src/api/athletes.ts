import { Membership } from "./memberships";
import { Operation } from "@utiliread/jsonpatch";
import { http } from "./http";
import { jsonProperty } from "@utiliread/json";

export class Athlete {
  @jsonProperty()
  id!: number;

  @jsonProperty()
  name!: string;

  @jsonProperty()
  email!: string;

  @jsonProperty()
  phone!: string;

  @jsonProperty({ type: Membership })
  memberships: Membership[] = [];

  constructor(init?: AthleteInit) {
    Object.assign(this, init);
  }
}

export type AthleteInit = Omit<Athlete, "id" | "memberships"> & Partial<Athlete>;

const storage = [
  new Athlete({
    id: 1,
    name: "Rasmus",
    email: "rmja@test.dk",
    phone: "12345678",
  }),
  new Athlete({
    id: 2,
    name: "Henrik",
    email: "henrik@test.dk",
    phone: "112233",
  }),
];

export const create = (init: AthleteInit) => ({
  transfer: () => {
    const item = new Athlete({
      id: storage.length + 1,
      ...init,
      memberships: [],
    });
    storage.push(item);
    return Promise.resolve(item);
  },
}); // http.post("/Athletes").withJson(player).expectJson(Player);

export const get = (id: number) => ({
  transfer: () => Promise.resolve(storage.find((x) => x.id === id)),
}); // http.get(`/Athletes/${id}`).expectJson(Player);

export const lookup = (filter: { email: string; phone: string }) => ({
  transfer: () =>
    Promise.resolve(
      storage.find((x) => x.email === filter.email && x.phone == filter.phone)
    ),
}); // http.get("/Athletes/Lookup", player).expectJson(Athlete).allowEmptyResponse()

export const update = (id: number, patch: Operation[]) =>
  http.patch(`/Athletes/${id}`).withJsonPatch(patch).expectJson(Athlete);
