import { createSlice } from '@reduxjs/toolkit';
import { TERMINAL_PANE_ID } from '../Terminal/Terminal';
import { IPane, PanesState } from "./panes.type"
import { CaseReducer, PayloadAction} from '@reduxjs/toolkit'

const defaultState : PanesState = [
  {
    id: TERMINAL_PANE_ID,
    order: 1,
  }
]
export const slice = createSlice({
  name: 'panes',
  initialState: defaultState,
  reducers: {
    addPane: (state : PanesState, action: PayloadAction<IPane>) => {
      //if (state.find(pane => pane.id == action.payload.id)) return;
      state.push(action.payload);
    },
    removePane: (state : PanesState, action: PayloadAction<string>) => {
      state = state.filter(pane => pane.id != action.payload);
    },
    resizePaneHeight: (state: PanesState, action: PayloadAction<[string, number]>) => {
      const [id, size] = action.payload;
      state = state.map(pane => {
        if (pane.id === id) {
          pane.additionalSizeHeight = pane.additionalSizeHeight ? pane.additionalSizeHeight + size : size;
        }
        return pane;
      })
    },
    resizePaneWidth: (state: PanesState, action: PayloadAction<[string, number]>) => {
      const [id, size] = action.payload;
      state = state.map(pane => {
        if (pane.id === id) {
          pane.additionalSizeWidth = pane.additionalSizeWidth ? pane.additionalSizeWidth + size : size;
        }
        return pane;
      })
    },
 }
})
export const {
  removePane,
  addPane,
  resizePaneWidth,
  resizePaneHeight
} = slice.actions
export default slice.reducer;
