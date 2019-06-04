/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'

import { List } from './List'

describe('List', () => {
  const wrapper = shallow(<List />)
  // eslint-disable-next-line no-return-assign
  // beforeEach(() => wrapper = shallow(<List />))

  it('should render 2 div component\'s', () => {
    expect(wrapper.find('div').length).toEqual(2)
  })
  it('should trigger Loading state when pulling data', () => {
    wrapper.instance().getShips()
    expect(wrapper.state('loading')).toEqual(true)
  })
  it('should access ship data from API', done => {
    wrapper.instance().getShips()
  })
  // it('should access character data from API', () => {
  //   wrapper.instance().getCharacter().then(() => {
  //     expect(wrapper.state('characters').length).toEqual(0)
  //   })
  // })
})
