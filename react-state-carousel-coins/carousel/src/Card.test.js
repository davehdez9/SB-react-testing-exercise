import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'

//Smoke Test
test('should render without crashing', () => {
    render(<Card />)
})

//Snapshot test
test('should match snapshot', () => {
    const { asFragment } = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
})

