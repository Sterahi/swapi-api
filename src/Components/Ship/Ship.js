/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'
import { css } from 'emotion'
import Spinner from 'react-spinkit'

import './Ship.css'

class Ship extends Component {
  constructor () {
    super()
    this.state = {
      ship: {},
      // ship: this.props.shiplist.ships[this.props.shipListId],
      loading: false
    }
  }
  async getShip () {
    this.setState({ loading: true })
    const response = await fetch(`https://swapi.co/api/starships/${this.props.match.params.id}/`)
    const json = await response.json()
    this.setState({
      loading: false,
      ship: json
    })
  }

  componentWillMount () {
    // if we don't have anything from redux do the old way
    if (this.props.location.state === undefined || this.props.shipList.ships.length === 0) {
      this.getShip()
    } else if (this.props.shipList.ships[this.props.location.state.shipListId] !== undefined) {
      this.setState({
        ship: this.props.shipList.ships[this.props.location.state.shipListId]
      })
    }
  }

  render () {
    // const { ship } = this.props.shipList.ships[this.props.shipListId]
    const { ship } = this.state
    console.log(this.props)
    console.log(this.props.location.state)
    return (
      <div
        className={css`
          
        `}
      >
        <h2>{ship.name}</h2>
        <ul>
          <li>model: {ship.model}</li>
          <li>manufacturer: {ship.manufacturer}</li>
          <li>cost_in_credits: {ship.cost_in_credits}</li>
          <li>length: {ship.length}</li>
          <li>max_atmosphering_speed: {ship.max_atmosphering_speed}</li>
          <li>crew: {ship.crew}</li>
          <li>passengers: {ship.passengers}</li>
          <li>cargo_capacity: {ship.cargo_capacity}</li>
          <li>consumables: {ship.consumables}</li>
          <li>hyperdrive_rating: {ship.hyperdrive_rating}</li>
        </ul>
        <Link to="/">Go Back</Link>
        {this.state.loading &&
          <div className={css` text-align:center;`}>
            <Spinner />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { ships } = state
  return state
}

export default connect(mapStateToProps)(Ship)
