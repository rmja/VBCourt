export interface IState {
  playerId?: number;
}

export const initialState: IState = {};

export const setPlayer = (
  state: IState,
  action: unknown,
  playerId: number
): IState => {
  if (action !== setPlayer) {
    return state;
  }
  return { ...state, playerId };
};

export const clearPlayer = (state: IState, action: unknown): IState => {
  if (action !== clearPlayer) {
    return state;
  }
  const newState = { ...state };
  delete newState.playerId;
  return newState;
};
