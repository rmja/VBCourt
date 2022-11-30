import { IState, IStore } from "@aurelia/state";

import { AppTask } from "aurelia";

export interface IState {
  phone?: number;
  email?: string;
}

export const initialState: IState = {};

interface ISetAthleteDetailsAction {
  type: "set-athlete-details";
  phone: number;
  email: string;
}

export const stateHandler = (
  state: IState,
  action2: unknown
) => {
  const action = action2 as ISetAthleteDetailsAction;
  switch (action.type) {
    case "set-athlete-details":
      return { ...state, phone: action.phone, email: action.email };
    default:
      return state;
  }
};

export const setAthleteDetails = (
  phone: number,
  email: string
): ISetAthleteDetailsAction => ({
  type: "set-athlete-details",
  phone,
  email,
});

export const rehydrateState = (stateKey: string): IState | null =>
  JSON.parse(localStorage.getItem(stateKey) ?? "null") ?? null;

export const persistStatePlugin = (stateKey: string) =>
  AppTask.creating(IStore, (store) => {
    store.subscribe({
      handleStateChange: (newState) =>
        localStorage.setItem(stateKey, JSON.stringify(newState)),
    });
  });
