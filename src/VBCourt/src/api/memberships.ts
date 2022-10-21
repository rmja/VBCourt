import { http } from "./http";
import { jsonProperty } from "@utiliread/json";

export class Membership {
  @jsonProperty()
  id!: number;

  @jsonProperty()
  athleteId!: number;

  @jsonProperty()
  teamId!: number;

  constructor(init?: MembershipInit) {
    Object.assign(this, init);
  }
}

export type MembershipInit = Readonly<Omit<Membership, "id">>;

export const join = (
  athleteId: number,
  teamId: number,
  command: { password?: string }
) =>
  http
    .post(`/Athletes/${athleteId}/Teams/${teamId}`)
    .withJson(command)
    .expectJson(Membership);

export const leave = (athleteId: number, teamId: number) =>
  http.delete(`/Athletes/${athleteId}/Teams/${teamId}`);
