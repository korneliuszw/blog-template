import React from 'react';
import match from '../Commands/matcher';
import Input from './Input';
import './terminal.scss'

interface ITerminalState {
    history: string[];
    processingCommand: boolean;
}
interface ITerminalProps {}

const HISTORY_PREFIX = ">"

class Terminal extends React.Component<ITerminalProps, ITerminalState> {
    constructor(props : ITerminalProps) {
        super(props);
        this.state = {
            history: [],
            processingCommand: false,
        }
    }
    render() : JSX.Element {
      return (
          <div className="terminal">
              {this.state.history.map((historyElement, i) => {
                  return (
                      <div key={i} className="history-item">{historyElement.split('\n').map(str => <p> {str} </p>)} </div>
                  )
              })}
              <Input onSubmit={this.onCommandSubmit} disabled={this.state.processingCommand} />
              {this.state.processingCommand && <br/>}
          </div>
      );
    }
    onCommandSubmit = (command: string) => {
        if (command === 'clear') {
            this.setState({history: [], processingCommand: true}, () => {
                // flush the input
                this.setState({processingCommand: false});
            });
            return;
        }
        this.setState({processingCommand: true});
        setTimeout(() => {
            const result = match(command);
            this.state.history.push(HISTORY_PREFIX + command);
            console.log(result)
            if (!result) {
                this.state.history.push('Command not found! See help for info');
            } else {
                this.state.history.push(result)
            }
            this.setState({
                history: this.state.history,
                processingCommand: false,
            })
        }, 200)
    }
}
export const TERMINAL_PANE_ID = "TERMINAL";
export default Terminal;
