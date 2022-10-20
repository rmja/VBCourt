import "@utiliread/http/json";
import "@utiliread/http/jsonpatch";

import { clearPlayer, initialState, setPlayer } from "./state";

import { App } from "./app";
import Aurelia from "aurelia";
import { RouterConfiguration } from "@aurelia/router";
import { StateDefaultConfiguration } from "@aurelia/state";

Aurelia.register(
  RouterConfiguration.customize({ useUrlFragmentHash: false }),
  StateDefaultConfiguration.init(initialState, setPlayer, clearPlayer)
)
  .app(App)
  .start();
