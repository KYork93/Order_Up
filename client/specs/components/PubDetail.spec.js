import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'

import PubDetail from '../../src/components/PubDetail'

describe('Pub Detail', () => {

  it('should have pub-detail div', () => {
    const wrapper = shallow(<PubDetail />)

    //No data yet, so defaults to No pub selected
    expect(wrapper.contains(<h2>No Pub Selected</h2>)).to.equal(true)
  })

})
