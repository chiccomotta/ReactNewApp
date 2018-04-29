import React, { Component } from 'react'
import { connect } from 'react-redux'

// Passo lo stato al componente tramite props
const mapStateToProps = state => state

const componentList = ({ todos, name }) => {
  if (!todos) return null

  return (
    <div style={{ overflowY: 'scroll', height: '200px' }}>
      <div>{name}</div>
      <ul>{todos.map((todo, i) => <li key={i}>{todo}</li>)}</ul>
    </div>
  )
}

export default connect(mapStateToProps, null)(componentList)
