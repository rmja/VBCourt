import { clearPlayer, initialState, setPlayer } from "./state";

import { App } from "./app";
import Aurelia from "aurelia";
import { StateDefaultConfiguration } from "@aurelia/state";

Aurelia.register(
  StateDefaultConfiguration.init(initialState, setPlayer, clearPlayer)
)
  .app(App)
  .start();
