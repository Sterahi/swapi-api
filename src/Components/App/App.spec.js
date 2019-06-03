/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Route } from 'react-router-dom'
import { shallow } from 'enzyme'

import AppRouter from './App'
import List from '../List/List'
import Ship from '../Ship/Ship'

describe('App', () => {
  let wrapper = shallow(<AppRouter />)

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
  // it('should render a List component', () => {
  //   expect(wrapper.containsMatchingElement(<List />)).toEqual(true)
  // })
  it('should render 2 <Route />\'s', () => {
    expect(wrapper.containsAllMatchingElements([
      <Route path="/" exact component={List} />,
      <Route path="/ship/:id" component={Ship} />
    ]
    )).toEqual(true)
  })
})
