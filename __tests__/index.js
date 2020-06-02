import React from 'react'
import { render } from '../utils/test-utils'
import Products from '../pages/index'

test('renders home page link', () => {
    const { getByText } = render(<Products />)
    const linkElement = getByText(
        /Simple online market/
    )
    expect(linkElement).toBeInTheDocument()
})