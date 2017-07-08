import React, { Component} from 'react'

class ListContacts extends Component {
  render() {

    this.props.contacs

    return (
      <ol className='contact-list'>
        { this.props.contacs.map((contact) => (
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
    )
  }
}


ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts
