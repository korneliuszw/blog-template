import { combineReducers } from "redux";
import paneReducer from './Panes/panes.reducer'

export const reducer = combineReducers({
  pane: paneReducer
});
export type RootState = ReturnType<typeof reducer>
export default reducer
