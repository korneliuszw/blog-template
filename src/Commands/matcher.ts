import Commands from './index'

function match(passedCommand: string) {
    const commandParts = passedCommand.split(' ');
    for (const command of Commands) {
        if (commandParts[0] !== command.invocation) {
            continue;
        }
        return command.behaviour();
    }
}
export default match;
