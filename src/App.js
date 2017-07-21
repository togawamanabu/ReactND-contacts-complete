import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ComtactsAPI from './ContactsAPI'

class App extends Component {
  state = {
    screen: 'list',
    contacts : []
  }

  componentDidMount() {
    contactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }

  removeContact = (contact) => {
    this.setState(state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    })

    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        {this.tate.screen === 'list' && (
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
          />
        )}
        
        {this.state.screen === 'create' && (
          <CreateContact />
        )}
      </div>
    )
  }
}

export default App;
