import React, { Component } from 'react'
import { connect } from 'react-redux'

const style = { overflowY: 'scroll', height: '200px' }

// Passo lo stato al componente tramite props
const mapStateToProps = state => state

const componentList = ({ todos, name }) => {
  return (
    <div style={style}>
      <div>{name}</div>
      <ul>{todos.map((todo, i) => <li key={i}>{todo}</li>)}</ul>
    </div>
  )
}

export default connect(mapStateToProps, null)(componentList)
