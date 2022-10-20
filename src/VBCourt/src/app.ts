import { ICustomElementViewModel } from "aurelia";
import { IRoute } from "@aurelia/router";

export class App implements ICustomElementViewModel {
  static routes: IRoute[] = [
    {
      path: "",
      component: import("./home"),
    },
    {
      path: "athletes",
      component: import("./athletes"),
    },
    {
      path: "teams",
      component: import("./teams"),
    },
  ];
  public message = "Hello World!";
}
