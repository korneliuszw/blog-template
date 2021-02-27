export default interface ICommand {
   invocation: string;
   behaviour: (args?: string[]) => string;
   usage?: string;
   shortHelp? : string;
}
