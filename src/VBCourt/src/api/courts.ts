import { http } from "./http";
import { jsonProperty } from "@utiliread/json";

export class Court {
  @jsonProperty()
  id!: number;

  @jsonProperty()
  name!: string;

  constructor(init?: Readonly<Court>) {
    Object.assign(this, init);
  }
}

const storage = [new Court({ id: 1, name: "Padlebanen" })];

export const getAll = () => {
    transfer: () => Promise.resolve(storage)
}; // http.get("/Courts").expectJsonArray(Court);