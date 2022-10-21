import "@utiliread/http/json";
import "@utiliread/http/jsonpatch";
import "bootstrap/dist/css/bootstrap.css"

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
  RouterConfiguration.customize({
    // Enable pushState routing
    useUrlFragmentHash: false,
  }),
  StateDefaultConfiguration.init(
    rehydrateState("state") ?? initialState,
    stateHandler
  ),
  persistStatePlugin("state"),

  // FASTAdapter,
  // DialogDefaultConfiguration,
)
  .app(App)
  .start();

// provideFASTDesignSystem().register(
//   fastCard(),
//   fastTextField(),
//   fastTreeView(),
//   fastTreeItem(),
//   fastDialog(),
//   fastTabs(),
//   fastButton()
// );
