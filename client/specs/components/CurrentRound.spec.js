import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'

import CurrentRound from '../../src/components/CurrentRound'

describe('Current Round', () => {

  it('should render current round div', () => {
    const wrapper = mount(<CurrentRound />)
    expect(wrapper.find(".current-round").length).to.eq(1)
  })

})
