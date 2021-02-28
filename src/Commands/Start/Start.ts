import { useDispatch } from "react-redux";
import { store } from "../..";
import { addPane } from "../../Panes/panes.reducer";
import { TERMINAL_PANE_ID } from "../../Terminal/Terminal";
import ICommand from "../command.interface";

const StartCommand : ICommand = {
  behaviour: (args) => {
    if (!args || !args[0]) {
      return StartCommand.usage || "Failed";
    }
    switch (args[1]) {
      case 'terminal': {
        store.dispatch(addPane({
          id: TERMINAL_PANE_ID,
          order: 0,
        }))
        break;
      }
    }
    return "OK";
  },
  invocation: 'start',
  usage: 'start <APP_NAME>',
  shortHelp: 'Starts a new app in a new pane'
}
export default StartCommand;
