import React, { Component } from 'react';

class Translate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text_to_translate: '',
      text_translated: ''
    };

    this.handleChangeTextTranslated = this.handleChangeTextTranslated.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeTextTranslated(e) {
    return this.setState({
      text_to_translate: e.target.value
    })
  }

  handleClick() {
    /* Fake api response using mocky.io with response: {"text":"hello"} */
    fetch(`http://www.mocky.io/v2/5e25c30f2f00006300ce2cc7`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: this.state.text_to_translate,
        to: 'en'
      })
    }).then(response => response.json())
    .then(data => {
      console.log(data.text);
      this.setState({
        text_translated: data.text
      })
    });
  }

  render() {
    return (
      <>
        <input type="text" name="text_to_translate" value={this.state.text_to_translate} onChange={this.handleChangeTextTranslated} />
        <button type="button" onClick={this.handleClick}>Translate</button>
        <hr/>
        <p>{this.state.text_translated}</p>
      </>
    );
  }
}

export default Translate;
