import React, { Component } from 'react'
import { connect } from 'react-redux'

// Passo lo stato al componente tramite props
const mapStateToProps = state => state

const componentList = ({ todos, name }) => {
  if (!todos) return null

  return (
    <div style={{ overflowY: 'scroll', height: '200px' }}>
      <div>{name}</div>

      {todos.map((todo, i) => <p key={i}>{todo}</p>)}
    </div>
  )
}

export default connect(mapStateToProps, null)(componentList)
