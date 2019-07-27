import React from 'react'
import { render } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  const props = { title: 'Pecahan Rupiah' }

  it('renders title', () => {
    const { queryByText } = render(<Header {...props} />)
    const title = queryByText(props.title)
    expect(title.innerHTML).toBe(props.title)     
  })
})