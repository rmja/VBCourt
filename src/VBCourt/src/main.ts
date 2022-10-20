import "@utiliread/http/json";
import "@utiliread/http/jsonpatch";

import {
  initialState,
  persistStatePlugin,
  rehydrateState,
  stateHandler,
} from "./state";

import { App } from "./app";
import Aurelia from "aurelia";
import { RouterConfiguration } from "@aurelia/router";
import { StateDefaultConfiguration } from "@aurelia/state";

Aurelia.register(
  RouterConfiguration.customize({ useUrlFragmentHash: false }),
  StateDefaultConfiguration.init(
    rehydrateState("state") ?? initialState,
    stateHandler
  ),
  persistStatePlugin("state")
)
  .app(App)
  .start();
