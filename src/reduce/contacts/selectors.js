
export const selectContacts = state => state.contacts

export const selectFilter = state => state.filters

export const visibleContacts = state => {
    const { contacts } = selectContacts(state)
    const filter = selectFilter(state)

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase()))
}
