import { IState, IStore } from "@aurelia/state";

import { AppTask } from "aurelia";

export interface IState {
  playerId?: number;
}

export const initialState: IState = {};

export const enum StateAction {
  setPlayer = "setPlayer",
  clearPlayer = "clearPlayer",
}

// FIXME: This seems very error prone - how to do this better?
export const stateHandler = (
  state: IState,
  action: unknown,
  ...params: any[]
) => {
  switch (action) {
    case StateAction.setPlayer:
      return setPlayer(state, params[0]);
    case StateAction.clearPlayer:
      return clearPlayer(state);
    default:
      return state;
  }
};

const setPlayer = (state: IState, playerId: number): IState => {
  return { ...state, playerId };
};

const clearPlayer = (state: IState): IState => {
  const newState = { ...state };
  delete newState.playerId;
  return newState;
};

export const rehydrateState = (stateKey: string): IState | null =>
  JSON.parse(localStorage.getItem(stateKey) ?? "null") ?? null;

export const persistStatePlugin = (stateKey: string) =>
  AppTask.creating(IStore, (store) => {
    store.subscribe({
      handleStateChange: (newState) =>
        localStorage.setItem(stateKey, JSON.stringify(newState)),
    });
  });
