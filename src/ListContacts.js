import React, { Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {
  static propType = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    let showingContacts
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
        showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))

    } else {
      showingContacts = this.props.contacts
    }

    showingContacts.sort(sortBy('name'))

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className="search-contacts"
            type="text"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
            placeholder="serch contacts"
          />
        </div>

        <ol className='contact-list'>
          { this.props.showingContacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                  backgroundImage: 'url($contact.avatarURL)'
                }} />
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <button className='contact-remove'>
                Remove
              </button>
            </li>
          )) }
        </ol>
      </div>
    )
  }
}



export default ListContacts
