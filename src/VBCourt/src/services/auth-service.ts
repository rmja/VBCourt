import { DI } from "aurelia";
import { IApiClient } from "../api/client";

export const IAuthService = DI.createInterface<IAuthService>(
  "IAuthService",
  (x) => x.singleton(AuthService)
);
export type IAuthService = AuthService;

export class AuthService {
  private athleteId: number | null = null;

  get isLoggedIn() {
    return !!this.athleteId;
  }

  constructor(@IApiClient private api: IApiClient) {
    const item = sessionStorage.getItem("authenticated");
    this.athleteId = item ? Number(item) : null;
  }

  async login(email: string, phone: string) {
    const athlete = await this.api.athletes.lookup({ email, phone }).transfer();
    if (!athlete) {
      this.athleteId = null;
      return false;
    }

    sessionStorage.setItem("authenticated", athlete.id.toString());
    this.athleteId = athlete.id;
    return true;
  }

  logout() {
    sessionStorage.removeItem("authenticated");
    this.athleteId = null;
  }

  getUser() {
    if (!this.athleteId) {
      return Promise.reject();
    }
    return Promise.resolve({ athleteId: this.athleteId });
  }
}
