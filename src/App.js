import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListContacts from './ListContacts'
import * as ComtactsAPI from './ContactsAPI'

class App extends Component {
  state = {
    contacts : []
  }

  componentDidMount() {
    contactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }

  render() {
    return (
      <div>
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
        />
      </div>
    )
  }
}

export default App;
