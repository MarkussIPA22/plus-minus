import React, { Component } from 'react';

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.initialValue
    };
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }));
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleCheckboxChange}
          />
          Atzīmēt izvēlni ({this.state.isChecked ? 'true' : 'false'})
        </label>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      values: [true, true, false]
    };
  }

  render() {
    return (
      <div>
        <h1>React Izvēlnes rūtiņu piemērs</h1>
        {this.state.values.map((value, index) => (
          <Check key={index} initialValue={value} />
        ))}
      </div>
    );
  }
}

export default App;
