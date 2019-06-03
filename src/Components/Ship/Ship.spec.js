/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { shallow } from 'enzyme'

import Ship from './Ship'

describe('Ship', () => {
  let wrapper
  // eslint-disable-next-line no-return-assign
  beforeEach(() => wrapper = shallow(<Ship />))

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})
