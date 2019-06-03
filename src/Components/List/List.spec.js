/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'

import List from './List'

describe('List', () => {
  let wrapper
  // eslint-disable-next-line no-return-assign
  beforeEach(() => wrapper = shallow(<List />))

  it('should render 3 div\'s', () => {
    expect(wrapper.find('div').length).toEqual(3)
  })
  it('should triger Load state when accessing data', () => {
    wrapper.instance().getShips()
    expect(wrapper.state('loading')).toEqual(true)
  })
  it('should access ship data from API', () => {
    wrapper.instance().getShips().then(() => {
      expect(wrapper.state('ships').length).toBeGreaterThan(1)
    })
  })
  it('should access character data from API', () => {
    wrapper.instance().getCharacter().then(() => {
      expect(wrapper.state('characters').length).toEqual(0)
    })
  })
})
