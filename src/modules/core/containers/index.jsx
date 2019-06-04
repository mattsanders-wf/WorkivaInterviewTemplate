import React, { Fragment } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectors, addMessage } from '../redux/home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={'row'}>
        <div className={'column'}>
          <h2>Input</h2>
          {this.renderInput()}
        </div>
        <div className={'column'}>
          <h2>Messages</h2>
          {this.renderMessages()}
        </div>
      </div>
    );
  }

  /// Renders the list of messages wrapped in paragraph tags
  renderMessages() {
    var count = 0;
    const messages = this.props.messages.map(message => {
      return (
        <Fragment>
          <p key={count++}>{message.message}</p>
          <p key={count++}>{message.timestamp}</p>
        </Fragment>
      );
    });

    return messages;
  }

  handleUserName(e) {

  }

  /// Renders a single input for the user to enter messages
  renderInput() {
    return (
      <div>
        <label>
          User Name:
          <input
            id='username-input'
            type='text'
            onChange={() => this.handleUserName()}
          />
        </label>
        <label>
          Message:
          <input id='message-input' type='text' />
        </label>
        <input
          type='submit'
          value='Submit'
          onClick={() => {
            this.props.addMessage(
              document.getElementById('message-input').value
            );
            document.getElementById('message-input').value = '';
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addMessage
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    messages: selectors.getMessages(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);