import { ICustomElementViewModel } from "aurelia";
import { IRoute } from "@aurelia/router";

export class App implements ICustomElementViewModel {
  static routes: IRoute[] = [
    {
      path: "",
      component: () => import("./components/home"),
    },
    {
      path: "athletes",
      component: () => import("./components/athletes"),
    },
    {
      path: "teams",
      component: () => import("./components/teams"),
    },
  ];
  public message = "Hello World!";
}
