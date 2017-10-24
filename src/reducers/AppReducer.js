export const initialState = {};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    default:
      return state;
  }
}
