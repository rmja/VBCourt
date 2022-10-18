export interface IState {
  player?: {
    id: number;
    name: string;
  };
}

export const initialState: IState = {};

export const setPlayer = (
  state: IState,
  action: unknown,
  player: { id: number; name: string }
): IState => {
  return { ...state, player };
};

export const clearPlayer = (state: IState, action: unknown): IState => {
  const newState = { ...state };
  delete newState.player;
  return newState;
};
