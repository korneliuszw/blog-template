import React from "react"
import './input.scss'

// TODO: Move into redux
const PREFIX = "heeelo |> "

interface ITerminalInputState {
    input: string;
}
interface ITerminalInputProps {
    onSubmit: (text: string) => void;
    disabled?: boolean;
}

class Input extends React.PureComponent<ITerminalInputProps, ITerminalInputState> {
    inputElement: HTMLInputElement | null;
    constructor(props: ITerminalInputProps) {
        super(props);
        this.state = {
            input: ''
        };
        this.inputElement = null;
    }
    render(): JSX.Element {
        return (
            <div className="terminal-input">
                <form onSubmit={this.inputSubmit}>
                    <div className="input-prefix"> {PREFIX} </div>
                    <input autoFocus type="text"
                           className="input-text"
                           onChange={this.onTextChange}
                           value={this.state.input}
                           ref={(input) => this.inputElement = input }
                           disabled={this.props.disabled} />
                    <input type="submit" className="input-submit"/>
                </form>
            </div>
        )
    }
    componentDidUpdate(prevPros: ITerminalInputProps) {
        if (prevPros.disabled && !this.props.disabled) {
            this.setState({input: ''})
            this.inputElement?.focus();
        }
    }
    onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ input: event.target.value });
    }
    inputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.onSubmit(this.state.input);
    }
}
export default Input
