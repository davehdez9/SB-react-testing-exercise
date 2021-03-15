import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

// Smoke Test
test('should render without crash', () => {
    render(< App />)
})

//Snapshot
test('should match snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
})
