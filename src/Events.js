import React from 'react';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      data: []
    };

    this.updateInputName = this.updateInputName.bind(this);
    this.clickEvent = this.clickEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  clickEvent(e) {
    this.state.data.push(this.state.name);
    /*this.setState({
      data: [...this.state.data, this.state.name]
    });*/
    return this.setState({
      name: ''
    });
  }

  updateInputName(e) {
    return this.setState({
      name: e.target.value
    });
  }

  deleteEvent(item) {
    const newState = this.state.data;
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
    }

    this.setState({
      data: newState
    });
  }

  render() {
    const { data } = this.state;

    const itens = data.map(item => {
      return <li key={item}>
        {item.toString()}
        <button type="button" onClick={this.deleteEvent.bind(this, item)}>Delete</button>
      </li>
    });
    /*
    const itens = () => {
      this.state.data.map(item => {
        return <li key={item}>{item.toString()}</li>
      });
    }*/

    return (
      <div>
        <p>{this.state.name}</p>
        <input type="text" name="name" value={this.state.name} onChange={this.updateInputName} />
        <button type="button" onClick={this.clickEvent}>Submit</button>

        <ul>
          {itens}
        </ul>
      </div>
    );
  }
}

export default Events;
