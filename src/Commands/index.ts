import ICommand from "./command.interface";
import HelpCommand from "./Help/Help";
import StartCommand from './Start/Start';
const commands : ICommand[] = [
  HelpCommand,
  StartCommand
]

export default commands;
