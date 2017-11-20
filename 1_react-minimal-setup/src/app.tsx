import * as React from 'react';
import 'react-dom';
import Greeting from './greeting';

interface AppState {
  name: string
  names: string[]
}

export default class App extends React.Component<{}, AppState> {

  state = {names: [], name: ""};

  render() {
    return (
      <form onSubmit={(ev) => this.greet(ev)} autoComplete="off">
        {
          this.state.names.map((name, i) => <Greeting key={i} name={name} />)
        }
        <input 
          onChange={ev => this.handleChange(ev)} value={this.state.name} 
          type="text" 
          name="name" 
          placeholder="Name..." 
          />
        <button type="submit">Greet!</button>
        <button type="button" onClick={() => this.clear()}>Clear</button>
      </form>
    )
  }

  handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, name: ev.target.value });
  }

  greet(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const {names, name} = this.state;
    this.setState({ 
      names: [...names, name], 
      name: ""
    });
  }

  clear() {
    this.setState({names: [], name: ""})
  }
}