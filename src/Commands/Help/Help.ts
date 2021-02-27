import Commands from "..";
import ICommand from "../command.interface";

const help : ICommand = {
    behaviour: () => {
        const messages = Commands.map(command => {
            return command.invocation + (command.shortHelp ? (' - ' + command.shortHelp) : '');
        })
        return messages.join('\n');
    },
    invocation: 'help',
    shortHelp: 'prints all commands available',
}

export default help
