/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css } from 'emotion'
import List from '../List/List'
import Ship from '../Ship/Ship'

export default function AppRouter () {
  return (
    <Router>
      <div className ={css`
        width: 80vw;
        margin: 0 auto;
      `}>
        <Route path="/" exact component = {List} />
        <Route path = "/ship/:id" component = {Ship} />
      </div>
    </Router>
  )
}
