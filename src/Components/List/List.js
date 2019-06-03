/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Eye Candy
import { css } from 'emotion'
import Spinner from 'react-spinkit'
// Redux
import { connect } from 'react-redux'
import { updateShipList, getCharacters } from '../../redux/actions'

import ListItem from '../ListItem/ListItem'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ships: this.props.shipList.ships,
      characters: [],
      page: this.props.shipList.page,
      loading: false,
      hasMore: true
    }
    window.onscroll = () => {
      const {
        state: {
          loading,
          hasMore
        }
      } = this
      if (loading || !hasMore) { return }
      if (window.innerHeight + document.documentElement.scrollTop >= (document.documentElement.offsetHeight - window.innerHeight)) {
        this.getShips()
      }
    }
  }
  handleUpdateShipList (data, page) {
    this.props.updateShipList(data, page)
  }
  updateCharacters (characters) {
    this.props.getCharacters(characters)
  }

  getShips () {
    this.setState({ loading: true })
    let array = this.state.ships
    fetch(`https://swapi.co/api/starships/?page=${this.state.page}`).then(res => {
      return res.json()
    }).then(data => {
      array = this.state.ships.concat(data.results)
      let page = this.state.page
      // set length from API
      if (data.results.length % 10 !== 0) {
        this.setState({
          hasMore: false
        })
      }
      // set local state values to send to redux.
      this.setState({
        loading: false,
        ships: array,
        page: page += 1
      }, () => {
        // Use setState's callback to wait for the state to set & then update our store
        this.handleUpdateShipList(this.state.ships, this.state.page)
      })
    })
    return array
  }

  getCharacter () {
    this.setState({ loading: true })
    const response = fetch('https://swapi.co/api/people/').then(res => {
      return res.json()
    }).then(characters => {
      this.setState({
        characters: characters.results
      }, () => {
        this.updateCharacters(this.state.characters)
      })
    })
  }

  componentDidMount () {
    this.getShips()
    this.getCharacter()
  }

  render () {
    let id = 0
    return (
      <div className='list-view'>
        <h2>List View</h2>
        {
          (this.props.shipList.ships).map((ship, index) => {
            id = ship.url.split('/')
            // second last index because of trailing /
            // this is for fallback calling.
            id = id[id.length - 2]
            if (index % 8 === 0 && index >= 1) {
              return (
                <>
                  <ListItem data = { ship } key = { `ship-${index}` } />
                  <p key ={`character-${index}`}>Character Name</p>
                </>
              )
            }
            return (
              <ListItem data = {ship} key={`ship-${index}`} />
            )
          })}
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

export default connect(mapStateToProps, { updateShipList, getCharacters })(List)
