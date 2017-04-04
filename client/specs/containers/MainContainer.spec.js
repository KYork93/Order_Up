import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'

import MainContainer from '../../src/containers/MainContainer'
import CurrentRound from '../../src/components/CurrentRound'
import PubSelector from '../../src/components/PubSelector'
import PubDetail from '../../src/components/PubDetail'
import DrinkDetails from '../../src/components/DrinkDetails'

describe('Main Container', () => {

  it('should render its components', () => {
    const wrapper = mount(<MainContainer />)
    expect(wrapper.containsAllMatchingElements([
      <CurrentRound />,
      <PubSelector />,
      <PubDetail />,
      <DrinkDetails />
    ])).to.equal(true)
  })

  it('should have state', () => {
    const wrapper = mount(<MainContainer />)
    expect(wrapper.state('focusPub')).to.equal(null)
    // empty array object
    expect(wrapper.state('drinksRound')).to.deep.equal([])
  })

})
